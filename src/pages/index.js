import React from 'react';
import { useRouter } from 'next/router';
import ScreenMyPage from '../components/screenMyPage';

const Page = () => (
    <ScreenMyPage router={useRouter()} />
);
export default Page;
