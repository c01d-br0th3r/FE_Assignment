import React from "react";
import Link from "next/link";
import Layout from "components/Layout";
import Label from "components/Label";
import Loading from "components/Loading";

const Home = () => {
  return (
    <Layout>
      <Link href="/cart">
        <a>
          <Label
            size="40px"
            weight="500"
            value="여기를!!! 누르면!!! 과제 페이지로!!!! 갑니다! 🚀"
          />
        </a>
      </Link>
      <Label value="로딩 테스트" margin="48px 0" />
      <Loading />
      <select name="number">
        <option value="" selected>
          -- 선택 --
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </Layout>
  );
};

export default Home;
