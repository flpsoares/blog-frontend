import styled from 'styled-components'

export const Container = styled.div`
  background-image:url('assets/background.png');
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Box = styled.div`
	display: table;
	width: 100%;
	max-width: 700px;
	height: 600px;
	font-size: 50px;
	color: white;

	.grow {
		display: table-cell;
		position: relative;

		color: rgba(195, 195, 195, 0.7);
		text-align: center;

		width: 50%;
		height: 100%;

		border-radius: 2px;

		overflow: hidden;
	}

	.active {
		width: 80%;
		color: white;

		&:hover {
			width: 80%;
		}
	}

	.desactive {
		width: 20%;
		cursor: pointer;

		&:hover {
			width: 20%;
			color: white;
		}
	}

	#signIn {
		background: rgba(128, 78, 239, 0.96);
		transition: all .6s ease-in-out;
	}

	#signUp {
		background: rgba(35, 38, 56, 0.96);
		transition: all .6s ease-in-out;
	}
`

export const Form = styled.form`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 50px 80px;
`

export const FormTitle = styled.p`
	font-size: 34px;
	font-weight: 600;
	text-align: left;
`

export const Info = styled.div`
	height: 100%;
	padding-top: 100px;

	p {
		font-size: 30px;
	}
`


export const Content = styled.div`
	display: flex;
	flex-direction: column;

	height: 100%;

	justify-content: center;
`

export const Input = styled.input`
	border-bottom: 2px solid white;
	border-radius: 2px;
	color: white;
	font-size: 24px;
	padding-left: 10px;
	margin-bottom: 35px;

	::placeholder {
		color: white;
	}
`

export const InputWithIcon = styled.div`
	border-bottom: 2px solid white;
	font-size: 20px;
	margin-bottom: 35px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	:nth-child(2) {
		cursor: pointer;
	}

	input {
		border: 0;
		width: 92%;
		margin: 0;
	}
`

export const InputButton = styled.button`
	background: rgba(0, 0, 0, 0.4);
	color: white;
	font-size: 30px;
	border-radius: 15px;

	width: 100px;
	height: 35px;

	display: flex;
	justify-content: center;
	align-items: center;

	transition: all .3s ease;

	&:hover {
		border-radius: 10px;
		background: rgba(0, 0, 0, 0.3);
	}
`

export const ForgotPassword = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 30px;

	a {
		color: rgba(195, 195, 195, 0.7);

		font-size: 20px;
		font-weight: 400;

		text-decoration: underline;
		cursor: pointer;

		transition: color .4s;

		&:hover {
			color: white;
		}
	}
`
