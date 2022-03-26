/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import styled from 'styled-components';
import { Button } from '~components/common';
import { COLORS, FONTS } from '~constants/styles';
import { listItemWithComma } from '~utils/format';
import type { APIReturnType } from '~types/api';

interface Props {
  requestInfo: APIReturnType;
}

const RequestCard = ({ requestInfo }: Props) => {
  const { id, title, client, due, count, amount, method, material, status } =
    requestInfo;
  return (
    <Card id={`${id}`}>
      <Summary>
        <h2>{title}</h2>
        <p>{client}</p>
        {status === '상담중' && <Status>상담중</Status>}
        <p>{due}까지 납기</p>
      </Summary>
      <Detail>
        <div>
          <li>도면개수</li>
          <li>총 수량</li>
          <li>가공방식</li>
          <li>재료</li>
        </div>
        <div>
          <li>{`${count}개`}</li>
          <li>{`${amount}개`}</li>
          <li>{listItemWithComma(method)}</li>
          <li>{listItemWithComma(material)}</li>
        </div>
      </Detail>
      <Form id="request">
        <Button form="request" type="submit" contained>
          요청 내역 보기
        </Button>
        <Button form="request" type="submit">
          채팅하기
        </Button>
      </Form>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 366px;
  min-width: 320px;
  padding: 24px 16px;
  border: 1px solid ${COLORS.BACKGROUND.BASE};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    padding: 23px 15px;
    border: 2px solid ${COLORS.PRIMARY[500]};
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 344px;
  }
`;

const Summary = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 16px;
    font-weight: ${FONTS.BOLD};
    line-height: 24px;
  }

  p {
    margin-top: 4px;
    font-weight: ${FONTS.MEDIUM};

    &:last-child {
      margin-top: 24px;
      font-weight: ${FONTS.REGULAR};
      color: ${COLORS.GRAY[600]};
    }
  }

  ::after {
    content: '';
    display: block;
    width: 100%;
    margin-top: 16px;
    border-bottom: 1px solid ${COLORS.BACKGROUND.BASE};
  }

  @media ${({ theme }) => theme.device.mobile} {
    p {
      margin-top: 0;

      &:last-child {
        margin-top: 16px;
      }
    }
  }
`;

const Status = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 8px;
  border: 1px solid ${COLORS.WARNING};
  border-radius: 12px;
  font-size: 12px;
  color: ${COLORS.WARNING};
`;

const Detail = styled.ul`
  display: grid;
  grid-template-columns: 102px 1fr;
  padding: 32px 0;

  div {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    row-gap: 8px;
    font-weight: ${FONTS.REGULAR};
  }

  div:last-child {
    font-weight: ${FONTS.BOLD};
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default RequestCard;
