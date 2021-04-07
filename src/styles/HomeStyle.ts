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
	width: 700px;
	height: 600px;
	display: table;
	cursor: pointer;
	font-size: 50px;
	color: white;

	.grow {
		display: table-cell;
		width: 40%;
		height: 100%;
		text-align: center;
		padding-top: 150px;
		border-radius: 2px;
		overflow: hidden;
		color: rgba(195, 195, 195, 0.7);

		p {
			font-size: 30px;
		}

		&:hover {
			width: 60%;
		}

	}

	#signIn {
		background: rgba(128, 78, 239, 0.9);
		transition: all .4s ease-in-out;

		&:hover {
			background: rgba(128, 78, 239, 1);
			color: white;
		}
	}

	#signUp {
		background: rgba(35, 38, 56, 0.9);
		transition: all .4s ease-in-out;

		&:hover {
			background: rgba(35, 38, 56, 1);
			color: white;
		}
	}

`














// export const SignIn = styled.div`
// 	width: 50%;
// 	height: 100%;
// 	background-color: blue;
// 	transition: width .8s ease-in-out;

// 	&:hover {
// 		width: 90%;
// 	}

// 	&:hover + ${SignUp} {
// 		width: 10%;
// 	}
// `

// export const SignUp = styled.div`
// 	width: 50%;
// 	height: 100%;
// 	background-color: red;
// 	transition: width .8s ease-in-out;

// 	&:hover {
// 		width: 90%;
// 	}

// 	&:hover + ${SignUp} {
// 		width: 10%;
// 	}

// `

