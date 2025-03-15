import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useGoogleLogin } from "@react-oauth/google";
import { Typography, Row, Button, Card } from "antd";
import { FaGoogle } from "react-icons/fa";

import { login } from "../store/slices/authSlice";
import { getUserInfo, userLoginWithGoogle } from "../request/auth/request";

const { Title, Text } = Typography;

const UserLogin = () => {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getLogin = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(() => {
    const fetchProfile = async () => {
      console.log("user", user)
      try {
        const data = await getUserInfo(user);
        if (data.error) {
          console.error("Error fetching profile:", data.error);
          return;
        }
        const payload = {
          social_id : data.id,
          name : data.name,
          email : data.email,
          given_name : data.given_name,
          family_name : data.family_name,
          picture : data.picture
        }
        const { uuid } = await userLoginWithGoogle(payload);
        dispatch(login({ ...data, uuid }));
        navigate("/movies");
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user, dispatch, navigate]);

  return (
    <Row justify="center" align="middle">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          background: "#f5f5f5",
        }}
      >
        <Card style={{ width: 400, textAlign: "center" }}>
          <Title level={3}>Login</Title>
          <img
            src="https://res.cloudinary.com/dpevovkcg/image/upload/v1738688196/movie-ticket/mi6zyx0vc2ogszslwkms.webp"
            alt="Login"
            style={{ width: "80%", borderRadius: "8px", marginBottom: 16 }}
          />
          <Button
            type="primary"
            danger
            icon={<FaGoogle />}
            size="large"
            block
            onClick={() => getLogin()}
          >
            Login with Google
          </Button>
          <Text style={{ display: "block", marginTop: 16 }}>
            I agree to the <Link to="/">Terms & Conditions</Link>
          </Text>
        </Card>
      </div>
    </Row>
  );
};

export default UserLogin;
