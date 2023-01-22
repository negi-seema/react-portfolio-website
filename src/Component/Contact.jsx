import React from "react";
import styled from "styled-components";
import { NavLink, useParams ,useNavigate} from "react-router-dom";


const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/success');
  };
  return (
    <Wrapper>
      <h2 className="contact__title">Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54778.11594012547!2d75.86119679999999!3d30.896947199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1667318980837!5m2!1sen!2sin"
        width="100%"
        height="350px"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <form  action='' method="POST" onSubmit={handleSubmit}>
          <input type="text" placeholder="NAME" className="form__inp" />
          <input type="text" placeholder="EMAIL" className="form__inp" />
          <textarea
            type="text"
            placeholder="MESSAGE"
            className="form__inp messagearea"
          />
          <button type='submit' className="btn">SUBMIT</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact__title {
    text-align: center;
    margin: 3rem 0;
  }
  form {
    display: flex;
    flex-direction: column;
    max-width: 50rem;
    margin: 5rem auto;
    row-gap: 1.5rem;
    .form__inp {
      padding: 0.8rem;
      font-weight: 600;
      font-size: 1.4rem;
      &::placeholder {
        font-weight: 600;
        font-size:1.3rem;
        color:${({theme})=>theme.color.lightgrey}
      }
    }
    .messagearea {
      height: 20rem;
      resize:none;
      &::placeholder {
        font-size:1.5rem;
      }
    }
    .btn{
      font-weight: 600;
    margin: auto;
    padding: 0.7rem 4.3rem;
    font-size: 1.4rem;
    color:${({theme})=>theme.color.lightgrey};
  background:${({theme})=>theme.color.footerbg}

    }
  }
`;
export default Contact;
