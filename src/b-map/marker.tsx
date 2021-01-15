import React, { Component } from 'react';
import { render } from 'react-dom';
import getCustomOverlay from './custom-overlay';

export interface MarkerProps {
  map?: any;
  lng: number;
  lat: number;
  jump?: boolean;
  onDragend?: (lng: number, lat: number, address: string, detail?: any) => any;
}

export interface MarkerState {}

class Marker extends Component<MarkerProps, MarkerState> {
  marker: any;

  static defaultProps = {
    jump: false,
  };

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    this.init();
  }

  destroy() {
    const { map } = this.props;
    if (this.marker) {
      map.removeOverlay(this.marker);
      this.marker = null;
    }
  }

  init() {
    this.destroy();
    const { map, lng, lat, onDragend, children, jump } = this.props;

    if (children) {
      const contentDom = document.createElement('div');
      render(<div className="eh-bmap-marker__point">{children}</div>, contentDom);
      const CustomOverlay = getCustomOverlay(window.BMap.Overlay);
      this.marker = new CustomOverlay({ lng, lat }, contentDom);
      map.addOverlay(this.marker);
    } else {
      const point = new window.BMap.Point(lng, lat);
      this.marker = new window.BMap.Marker(point);
      map.addOverlay(this.marker);

      if (jump) {
        this.marker.setAnimation(window.BMAP_ANIMATION_BOUNCE);
      }

      // 设置拖拽事件
      if (onDragend) {
        const myGeo = new window.BMap.Geocoder({ extensions_town: true });
        this.marker.enableDragging();
        this.marker.addEventListener('dragend', (e: any) => {
          myGeo.getLocation(new window.BMap.Point(lng, lat), (result: any) => {
            if (result) {
              onDragend(e.point.lng, e.point.lat, result.address, result);
            }
          });
        });
      }

      // TODO: 设置点击事件
    }
  }

  render() {
    return <div />;
  }
}

export default Marker;
