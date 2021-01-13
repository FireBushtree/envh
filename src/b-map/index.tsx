import InternalBMap from './b-map';
import Marker from './marker';

type InternalBMapT = typeof InternalBMap;
interface BMapI extends InternalBMapT {
  Marker: typeof Marker;
}

const BMap: BMapI = InternalBMap as BMapI;
BMap.Marker = Marker;

export default BMap;
