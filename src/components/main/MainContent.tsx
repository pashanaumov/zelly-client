import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface Props {}

export const MainContent: FC<Props> = () => {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) {
    return <></>;
  }

  return (
    <>
      <div
        style={{
          padding: 8,
          border: '1px solid black',
          width: '300px',
        }}
      >
        <p>Email: {user.email}</p>
        <p>UserId: {user.id}</p>
        <p>Country: {user.country}</p>
        <p>Preferred language: {user.language}</p>
      </div>
    </>
  );
};
