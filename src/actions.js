import { createAction } from 'redux-actions'

import {
  CONNECT_FEED,
  DISCONNECT_FEED,
  JOIN,
  LEAVE,
  ADD_COMMENT,
  HANDLE_ERROR,
} from 'constants'

// connectFeed()
export const connectFeed = createAction(CONNECT_FEED)
// disconnectFeed()
export const disconnectFeed = createAction(DISCONNECT_FEED)
// join(roomId)
export const join = createAction(JOIN)
// leave()
export const leave = createAction(LEAVE)
// addComment(text)
export const addComment = createAction(ADD_COMMENT)
// handleError(error)
export const handleError = createAction(HANDLE_ERROR)
