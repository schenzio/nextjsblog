import {
  Container,
} from '@mui/material'

export default function SectionWrapper({children}) {
  return (
    <Container 
      component="section"
      disableGutters 
      maxWidth={false} 
      sx={{
        bgcolor: "rgb(23 27 27 / 70%)",
        marginTop: "17vh",
        paddingTop: theme => theme.spacing(5),
        paddingBottom: theme => theme.spacing(5)
      }}
    >
      <Container maxWidth="md">
        {children}
      </Container>
    </Container>
  )
}
