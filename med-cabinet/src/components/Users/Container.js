import Container from '@material-ui/core/Container';
import DenseTable from './Users/DenseTable  '

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        <DenseTable/>
      </Container>
    </React.Fragment>
  );
}

