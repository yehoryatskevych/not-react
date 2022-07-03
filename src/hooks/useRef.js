import { METADATA_CURRENT_INSTANCE } from '../constants/metadata';
import useEffect from './useEffect';

function useRef(cb) {
  const ref = Reflect.get(global, METADATA_CURRENT_INSTANCE);

  useEffect(() => {
    cb.call(null, ref);
  });
}

export default useRef;
