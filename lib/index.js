

type JSONValue = { [key:string]: JSONValue } | [any] | string | number | boolean | null
type JSONObject = { [key:string]: JSONValue }
type JSONArray = JSONValue[]

export const createReducer =
  (initialState: JSONObject, handlers: Array) =>
  (state = initialState, action): JSONObject => {
    if (!action || !action.type) {
      return state;
    }

    const handler = handlers[action.type];
    if (typeof handler === 'function') {
      return handler(action.payload)(state);
    }

    return state;
  };

  export default createReducer;
