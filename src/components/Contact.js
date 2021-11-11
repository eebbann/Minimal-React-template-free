import styled  from "styled-components";
import Image from './images/comp_4.gif'

 function Contact() {
	 return (
		 <Container>
			 <FormTitle> Lets Get In Touch </FormTitle>
			 <Wrapper>
			 
				 <FormContainer>
				 <Form>
					<LeftForm>
						<Input type="text" placeholder="Name" />
						<Input type="email" placeholder="Email" />
						<Input type="text" placeholder="Subject" />
					</LeftForm>

					<RightForm>
					<TextArea placeholder="Message" />
					<Button>Send</Button>
					</RightForm>
          </Form>
				 </FormContainer>
				 <AddressContainer>
           <Linked src={Image} alt="comp_4" />
					 <Lin>@EEBANN</Lin>
				 </AddressContainer>
			 </Wrapper>
		 </Container>
	 )
 }
	const Container = styled.div`
   display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
 	height: 90%;
	background: white
	
	`;
  const Wrapper = styled.div`
	display:flex;
	justify-content: center;
	 align-items: center;
	flex-direction: row;
@media screen and (max-width: 600px) {
	flex-direction: column;
}
	`;

	const FormContainer = styled.div`
	width: 100%;
	height: 100%;
	`;

	const Form = styled.form`
	height: 250px;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 600px) {
	flex-direction:column;
}

	`;
	const Button = styled.button`
	border: 1px solid #fff;
   background:darkblue;
	 padding: 10px;
	 color: #fff;
	 font-size: 1.2rem;
	 letter-spacing: 1px;
	 cursor: pointer;
	 width: auto;
	 border-radius: 10px;
	 margin-bottom: 5%;
	 `;
		const Lin = styled.p`
		font-size: 1rem;
		letter-spacing: 1.3px;
		font-weight: bold;
		justify-content: center;
		align-items: center;
		padding:10px 45px;
		@media screen and (max-width: 600px) {
	width:50%;
	margin-bottom:5%;
}

		`;
	const	LeftForm = styled.div`
	height:100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	@media screen and (max-width: 600px) {
	height:60%;
	top:30px;
} 
	`
	const RightForm =styled.div`
	height:100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin:20px;

	@media screen and (max-width: 600px) {
	height:50%;
	margin:0px;
}
	`;
	const Input = styled.input`
	width: 200px;
	height: 60px;
	margin-bottom: 10px;
	border: 1px solid #3333;
	padding: 0 15px;
	`
	const TextArea = styled.input`
	width: 200px;
	height: 145px;
	margin-bottom: 10px;
	border: 1px solid #3333;
	padding: 0 15px;
	`;
	const FormTitle = styled.h1`
	font-size: 2.4rem;
	color: black;
	font-weight: bolder;
	margin-bottom:20px;
	 
	`;
	const Linked = styled.img`
	width: 100%;
	height: auto;
	`;
	const AddressContainer = styled.div`
	width: 50%;
	height: 70%;
	margin-left:40px
	`;
 export default Contact
