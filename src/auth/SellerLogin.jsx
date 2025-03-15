import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useGoogleLogin } from "@react-oauth/google";
import { Typography, Row, Button, Card } from "antd";
import { FaGoogle } from "react-icons/fa";
import { login } from "../store/slices/sellerAuthSlice";
import { getUserInfo, sellerLoginWithGoogle } from "../request/auth/request";

const { Title } = Typography;

const SellerLogin = () => {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getLogin = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const logindata = await getUserInfo(user);
        if (logindata.error) {
          console.error("Error fetching profile:", logindata.error);
          return;
        }
        const payload = {
          social_id : logindata.id,
          name : logindata.name,
          email : logindata.email,
          given_name : logindata.given_name,
          family_name : logindata.family_name,
          picture : logindata.picture
        }
        const {data, token} = await sellerLoginWithGoogle(payload);
        dispatch(login({ data, token }));
        navigate("/seller/dashboard");
      } catch (error) {
        console.error("Error fetching seller profile:", error);
      }
    };

    if (user) fetchProfile()
  }, [user, dispatch, navigate]);

  return (
    <Row justify="center" align="middle">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", background: "#f5f5f5" }}>
      <Card style={{ width: 400, textAlign: "center" }}>
        <Title level={3}>Seller Login</Title>
        <img src="https://res.cloudinary.com/dpevovkcg/image/upload/v1738688196/movie-ticket/mi6zyx0vc2ogszslwkms.webp" alt="Login" style={{ width: "80%", borderRadius: "8px", marginBottom: 16 }} />
        <Button type="primary" danger icon={<FaGoogle />} size="large" block onClick={() => getLogin()}>
          Login with Google
        </Button>
      </Card>
    </div>
    </Row>
  );
};

export default SellerLogin;
