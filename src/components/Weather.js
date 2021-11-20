import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRef } from "react";

function MyApp() {
  const CityInputRef = useRef();
  const [search, setSearch] = useState("bengaluru");
  const [data, setData] = useState("");

  let componentMounted = true;

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=79bf7fd370855f8c75d19965a4e29dba&units=metric`
      );
      if (componentMounted) {
        setData(await response.json());
        console.log(data);
      }
      return () => {
        componentMounted = false;
        fetchWeather();
        const id = setInterval(fetchWeather, 6000);
        return () => clearInterval(id);
      };
    };
    fetchWeather();
    const id = setInterval(fetchWeather, 300000);
    return () => clearInterval(id);
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredTitle = CityInputRef.current.value;
    setSearch(enteredTitle);
  };

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.toLocaleString("default", { month: "short" });
  let year = newDate.getFullYear();
  let day = newDate.toLocaleString("default", { weekday: "short" });

  return (
    <BigContainer>
      {!data.main ? (
        <></>
      ) : (
        <img
          src={`https://source.unsplash.com/1920x1080/?${data.weather[0].main}`}
        />
      )}
      <Container>
        <Details>
          {!data.main ? (
            <></>
          ) : (
            <Content>
              <Temp>
                <h3>{data.main.temp.toFixed(0)}&deg;</h3>
              </Temp>
              <City>
                <h2>{data.name}</h2>
                <p>
                  {day},{date} {month}'{year}
                </p>
              </City>
              <Emoji>
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                />
                <p>{data.weather[0].main}</p>
              </Emoji>
            </Content>
          )}
        </Details>
      </Container>

      <SmallContainer>
        <Formcontrol>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                placeholder="Another"
                ref={CityInputRef}
                required
              />
            </label>
            <button type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </Formcontrol>
        <Line></Line>
        {!data.main ? (
          <>
            <h5>Weather Details</h5>
            <Weather>
              <Detail>
                <p>Feels Like</p>
                <p>Humidity</p>
                <p>Weather</p>
                <p>Min|Max</p>
              </Detail>
              <Values></Values>
            </Weather>
          </>
        ) : (
          <>
            <h5>Weather Details</h5>
            <Weather>
              <Detail>
                <p>Feels Like</p>
                <p>Humidity</p>
                <p>Weather</p>
                <p>Min | Max</p>
              </Detail>
              <Values>
                <p>{data.main.feels_like}&deg;C</p>
                <p>{data.main.humidity}%</p>
                <p>{data.weather[0].main}</p>
                <p>
                  {data.main.temp_min.toFixed(2)}&nbsp; | &nbsp;{" "}
                  {data.main.temp_max.toFixed(2)}
                </p>
              </Values>
            </Weather>
          </>
        )}
      </SmallContainer>
    </BigContainer>
  );
}

export default MyApp;

const BigContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: coloum;
  justify-content: center;
  padding: 0 calc(1vw + 5px);
  position: relative;
  overflow: hidden;

  img {
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Container = styled.div`
  width: 65vw;
  margin: auto 0;
  height: 60vh;
  background: rgba(81, 79, 79, 0.25);
  box-shadow: 0 8px 32px 0 rgba(72, 70, 70, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;

  @media (min-width: 1200px) {
    height: 70vh;
    width: 50vw;
  }

  @media (max-width: 470px) {
  }
`;
const Details = styled.div`
  @media (min-width: 1200px) {
    height: 25vh;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  height: 100%;
  width: 100%;

  @media (max-width: 470px) {
  }
`;

const Content = styled.div`
  display: flex;

  height: 25vh;
  width: 50%;
  position: relative;
  flex-direction: column;

  @media (min-width: 1200px) {
    margin-left: 20%;
    flex-direction: row;
  }

  @media (max-width: 1200px) {
    margin-left: 20%;
  }

  @media (max-width: 470px) {
  }
`;

const Temp = styled.div`
  @media (min-width: 1200px) {
    font-size: 6vw;
    width: 100%;
  }
  width: 60vw;
  height: 100%;
  font-size: 78px;
  line-height: 0;

  @media (max-width: 1200px) {
    width: 100%;
    margin: auto;
    font-size: 58px;
    text-align: center;
    margin: 30% 0 auto;
  }

  @media (max-width: 470px) {
    margin: 30% 0 auto;
    font-size: 48px;
    text-align: center;
  }
`;
const City = styled.div`
  text-align: center;
  line-height: 0.2;
  text-transform: uppercase;
  width: 60vw;
  height: 100%;

  h2 {
    font-weight: 600;
    text-align: center;
  }
  p {
    font-size: 18px;
  }
  text-align: center;

  @media (min-width: 1200px) {
   
    margin-top: 15%;
    font-size: 2vw;
  }

  @media (max-width: 1200px) {
    width: 100%;
    h2 {
      font-size: 6vw;
    }
    p {
      font-size: 3vw;
    }
  }

  @media (max-width: 470px) {
    h2 {
      font-size: 6vw;
    }
    p {
      font-size: 12px;
    }
  }
  }
`;
const Emoji = styled.div`
  text-align: center;
  height: 100%;
  width: 60vw;
  p {
    font-size: 52px;
  }

  @media (min-width: 1200px) {
    position: absolute;
    bottom: 0;
    top: 2vh;
    left: 110%;

    p {
      position: absolute;
      top: 120px;
      bottom: 0px;
      left: 60px;
      font-size: 20px;
    }
  }

  @media (max-width: 1200px) {
    margin-top: 50%;
    width: 100%;
    img {
      position: absolute;
      bottom: 0;
      top: 100%;
      left: 20%;
      right: 80%;
    }

    p {
      bottom: 0px;
      left: 30px;
      font-size: 22px;
    }
  }

  @media (max-width: 470px) {
    margin-top: 110px;
    width: 100%;
    img {
      position: absolute;
      left: 30%;
    }
  }
`;

const SmallContainer = styled.div`
  width: 35vw;
  margin: auto 0;
  height: 60vh;
  background: rgba(81, 79, 79, 0.25);
  box-shadow: 0 8px 32px 0 rgba(72, 70, 70, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;

  h5 {
    margin-left: 10%;
    font-size: 20px;
    font-weight: 100;
    margin-bottom: 50px;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 1.5px;
  }

  @media (min-width: 1200px) {
    height: 70vh;
    width: 25vw;
  }
  @media (max-width: 470px) {
  }
`;

const Formcontrol = styled.div`
  width: 98%;
  display: flex;
  margin: 50px auto;
  display: flex;

  form {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex: 1;

    label {
      width: 80%;
    }

    input {
      height: 40px;
      border: none;
      margin: 0px 10%;
      width: 80%;
      border-bottom: 1px solid rgb(60, 60, 60);
      font-size: 18px;
      text-align: center; 

      :focus {
        outline: none !important;
        background-color: transparent !important;
      }
      ::placeholder {
        align-item: center
        color: rgba(40, 40, 40, 0.8);
        opacity: 1;
        font-size: 18px;
      }

      background-color: transparent;
    }

  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    height: 90px;
    width: 90px;
    margin: auto;
    background-color: #f77f00;
    border: none;
    font-size: 30px;
    color: rgba(40, 40, 40, 0.8);
    font-weight: 100;
    border-radius: 10px 10px 10px 10px;
  }

 

  @media (max-width: 1200px) {
    button {
      height: 60px;
      width: 60px;
      font-size: 20px;
      }
  }

  @media (max-width: 1200px) {
    button {
    height: 40px;
    width: 40px;
    font-size: 15px;
    }
  }
`;

const Line = styled.div`
  @media (min-width: 1200px) {
    width: 80%;
    margin: 40% 10% 0;

    height: 1px;
    background-color: rgba(40, 40, 40, 0.8);
  }

  @media (max-width: 1200px) {
  }
`;

const Weather = styled.div`
  display: flex;
`;
const Detail = styled.div`
  width: 50%;
  margin: 0px 10%;
  height: calc(50% - 10px);

  p {
    font-size: 18px;
    font-weight: 100;
    margin-bottom: 20px;
    color: rgba(237, 237, 237, 0.92);
  }
  @media (max-width: 1200px) {
    margin: 0px 0px;
    padding: 10px;
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 470px) {
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 370px) {
    p {
      font-size: 10px;
    }
    margin: -50px 0;
  }
`;

const Values = styled.div`
  width: 50%;
  margin: 0px 10%;
  height: calc(50% - 10px);

  p {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    color: rgba(237, 237, 237, 1);
  }
  @media (max-width: 1200px) {
    margin: 0px 0px;
    padding: 10px;
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 470px) {
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 370px) {
    p {
      font-size: 11px;
    }
    margin: -50px 0;
  }
`;
