import { Card, CardContent, Typography } from '@mui/material'
import { FC } from 'react'
import { IPost } from '../types/type'

interface PostItemProps {
  post: IPost
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <Card
      elevation={0}
      sx={{ maxWidth: 345 }}
    >
      <CardContent
        sx={{
          border: '1px solid #ccc',
          color: 'black',
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PostItem
