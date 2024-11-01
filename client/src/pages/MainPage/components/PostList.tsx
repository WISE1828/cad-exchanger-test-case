import { Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IPost } from '../../../shared/types/type'
import PostItem from './PostItem'

interface PostListProps {
  posts: IPost[]
}

const PostList: FC<PostListProps> = ({ posts }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/contact');
  };

  return (
    <Container>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          marginTop: "4rem",
          marginBottom: "4rem"
        }}
      >
        Also very important title
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {posts.map(post => (
          <Grid size={{ xs: 2, sm: 4, md: 4 }} key={post.id}>
            <PostItem key={post.id} post={post} />
          </Grid>
        ))}
      </Grid>
      <Button
        variant='outlined'
        color='inherit'
        onClick={handleButtonClick}
        sx={{
          display: "block",
          margin: "0 auto",
          marginTop: "2rem",
          marginBottom: "2rem"
        }}
      >
        Contact us
      </Button>
    </Container>
  )
}

export default PostList