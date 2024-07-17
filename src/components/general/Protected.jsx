import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Protected = (props) => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.isLoggedIn.success);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return null; // Render nothing while loading
  }

  return <Fragment>{props.children}</Fragment>
};

export default Protected;
