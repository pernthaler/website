export const SET_META = "SET_META";

export type Meta = {
  title: string,
  description: string,
  status?: number
}

export default function Store(state: Meta, action) {
  if (action.type === SET_META) {
    return { ...action.payload };
  }
  return state;
}

export function setMeta(meta: Meta) {
  return {
    type: SET_META,
    payload: meta
  };
}