import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ReactPlayer from 'react-player/youtube';


const VideoSection = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid size='grow' >
          <Typography variant="h2" gutterBottom>
            Most important title on the page
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
          </Typography>
        </Grid>
        <Grid size='grow'>
          <ReactPlayer
            url='https://www.youtube.com/embed/dQw4w9WgXcQ'
            width='100%'
            height='315px'
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default VideoSection
