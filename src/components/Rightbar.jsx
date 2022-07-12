import React from 'react';
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

const Rightbar = () => {
  return (
    <Box
      bgcolor='lightBlue'
      flex={2}
      p={2}
      sx={{
        display: {
          xs: 'none',
          sm: 'block',
        },
      }}
    >
      <Box sx={{ position: 'fixed', width: 300 }}>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Online friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt='Remy Sharp'
            src='https://media.istockphoto.com/photos/excited-happy-young-indian-woman-expressing-shock-picture-id1398385405?s=612x612'
          />
          <Avatar
            alt='Travis Howard'
            src='https://media.istockphoto.com/photos/man-holding-his-diary-picture-id1171698091?s=612x612'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://media.istockphoto.com/photos/smile-girl-at-beach-picture-id477151294?s=612x612'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://media.istockphoto.com/photos/passion-is-the-main-driving-force-behind-creativity-picture-id693275736?s=612x612'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://media.istockphoto.com/photos/summer-holidays-and-vacation-concept-picture-id578293096?s=612x612'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://media.istockphoto.com/photos/hes-a-standout-in-the-company-picture-id627645846?s=612x612'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://media.istockphoto.com/photos/young-beautiful-woman-smiling-happy-enjoying-summer-vacation-at-the-picture-id1204817220?s=612x612'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://media.istockphoto.com/photos/closeup-portrait-of-content-young-handsome-man-picture-id689932436?s=612x612'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://media.istockphoto.com/photos/young-beautiful-woman-smiling-happy-enjoying-summer-vacation-at-the-picture-id1204817220?s=612x612'
          />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={160} gap={5}>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/11696935/pexels-photo-11696935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/11696935/pexels-photo-11696935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/12681236/pexels-photo-12681236.jpeg?cs=srgb&dl=pexels-vildan-hanne-do%C4%9Fan-12681236.jpg&fm=jpg'
              alt=''
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
