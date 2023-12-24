import { TopicUserInfo, TopicToUserInfo } from './topic'

export type SortField = 'floor' | 'likes_count' | 'comments_count'
export type SortOrder = 'asc' | 'desc'

export interface TopicReplyRequestData {
  page?: string
  limit?: string
  sortField: SortField
  sortOrder: SortOrder
}

export interface TopicReply {
  rid: number
  tid: number
  floor: number
  to_floor: number
  r_user: TopicUserInfo
  to_user: TopicToUserInfo
  edited: number
  content: string
  upvotes: number[]
  upvote_time: number
  likes: number[]
  dislikes: number[]
  tags: string[]
  time: number
  comment: number[]
}

export interface TopicCreateReplyRequestData {
  to_uid: number
  to_floor: number
  tags: string[]
  content: string
  time: number
}

export interface TopicUpvoteReplyRequestData {
  to_uid: string
  rid: string
  time: string
}

export interface TopicLikeReplyRequestData {
  to_uid: string
  rid: string
  isPush: string
}

export interface TopicDislikeReplyRequestData {
  to_uid: string
  rid: string
  isPush: string
}

export interface TopicUpdateReplyRequestData {
  rid: number
  content: string
  tags: string[]
  edited: number
}
