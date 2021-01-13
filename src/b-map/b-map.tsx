import * as React from 'react';
import classnames from 'classnames';
import { loadJavascript } from '../utils/dom';

export interface Point {
  lng: number | string;
  lat: number | string;
}

export interface InternalBMapProps {
  className?: string;
  style?: React.CSSProperties;
  center?: Point;
  zoom?: number;
  onCreate?: (mapInstance: any) => any;
}

export interface InternalBMapState {
  map: any;
}

class InternalBMap extends React.Component<InternalBMapProps, InternalBMapState> {
  mapInstance: any;

  containerRef: HTMLDivElement;

  static defaultProps = {
    center: { lng: 120.591693, lat: 31.304737 },
    zoom: 15,
  };

  constructor(props) {
    super(props);
    this.state = {
      map: null,
    };
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate(prevProps) {
    const { center } = this.props;

    if (prevProps.center !== center) {
      const { lng, lat } = center;
      this.mapInstance.customSetMapCenter(lng, lat);
    }
  }

  async init() {
    if (!window.BMap) {
      await loadJavascript('http://api.map.baidu.com/getscript?v=3.0&ak=42IughV5lDxAt0wI8AhDVuGR');
      window.BMap.Map.prototype.customSetMapCenter = function customSetMapCenter(
        lng: number,
        lat: number,
      ) {
        const point = new window.BMap.Point(lng, lat);
        this.setCenter(point);
      };
    }

    const { center, zoom, onCreate } = this.props;

    // 1. 创建map实例
    const map = new window.BMap.Map(this.containerRef, {
      enableMapClick: false,
    });
    this.mapInstance = map;
    this.setState({ map: this.mapInstance });

    // 2. 设置中心点
    const point = new window.BMap.Point(center?.lng, center?.lat);
    map.centerAndZoom(point, zoom);

    // 3. 开启滚轮缩放
    map.enableScrollWheelZoom(true);

    if (onCreate) {
      onCreate(map);
    }
  }

  renderChildren() {
    const { children } = this.props;
    const { map } = this.state;

    if (!children || !map) return;

    return React.Children.map(children, (child) => {
      if (!child) {
        return;
      }

      if (typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean') {
        return child;
      }

      // 给子元素自动添加地图prop
      return React.cloneElement(child as React.ReactElement, {
        map,
      });
    });
  }

  render() {
    const { className, style } = this.props;

    return (
      <div
        className={classnames(className, 'eh-bmap')}
        style={style}
        ref={(ref) => {
          this.containerRef = ref;
        }}
      >
        {this.renderChildren()}
      </div>
    );
  }
}

export default InternalBMap;
