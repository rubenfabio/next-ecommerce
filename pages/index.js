import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Layout>
        <div>
          <h1>Products</h1>
          <ul>
            <li>Produtc 1</li>
            <li>Produtc 2</li>
            <li>Produtc 3</li>
          </ul>
        </div>
      </Layout>
    </div>
  );
}
