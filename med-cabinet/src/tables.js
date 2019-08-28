//dummy user data
import React from 'react'


const UserTable = () => (
  <>
  
  <div>
    
  </div>
  <table>
  
    
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
   
    <tbody>
      
      <tr>
     
        <td>Name data</td>
        <td>Username data</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  </>
)

export default UserTable



// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });
// const MediaCard= ()=> {
//   const classes = useStyles();


// return (
//   <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography className='User name' gutterBottom variant="h5" component="h2">
//             Hey !!!
//           </Typography>
//           <Typography className='' variant="body2" color="textSecondary" component="p">
//             Please review the information below that will allow you to be able to see the different types 
//             of strains that will provide you with the needs you are looking for.
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button className= 'button' size="small" color="#f0c8b6">
//           Share
//         </Button>
//         <Button className= 'button' size="small" color="#f0c8b6">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//     )
// }


// export default MediaCard