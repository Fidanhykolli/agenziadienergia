
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormReturn() {
  return (


    <Form style={{display:'flex', flexDirection:'column', justifyContent:"center", alignItems:"center", marginTop:"100px"}}>
          <h1 style={{marginTop:"0px", color:"whitesmoke"}}>
  LOGIN TO THE LAST BUILD-WEEK <br /> OF THE COURSE
</h1>
      <Form.Group style={{marginLeft:"-10px",marginBottom:"10px", marginTop:"50px"}} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:"#881B80"}}>UTENTE </Form.Label>
        <Form.Control style={{marginLeft:"20px",paddingLeft:"25px", paddingRight:"25px", paddingTop:"8px", paddingBottom:"8px", backgroundColor:"whitesmoke", border:"none"}} type="email" placeholder="Enter Username" />
    
      </Form.Group>

      <Form.Group style={{marginBottom:"10px", marginLeft:"-35.4px"}} className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color:"#881B80"}}>PASSWORD </Form.Label>
        <Form.Control style={{marginLeft:"20px",paddingLeft:"25px", paddingRight:"25px", paddingTop:"8px", paddingBottom:"8px", backgroundColor:"whitesmoke", border:"none"}} type="password" placeholder="Password" />
      </Form.Group>

      <Button className="btn" style={{backgroundColor:"#6D1666", color:"whitesmoke", border:"none", paddingTop:"10px",paddingBottom:"10px", paddingLeft:"25px", paddingRight:"25px", marginTop:"15px", borderRadius:"5px"}} type="submit">
        Submit
      </Button>
    </Form>

  );
}

export default FormReturn;