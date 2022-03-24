/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import styled from 'styled-components';
import { APIReturnType } from '~types/api';
import { Button } from '~components/common';
import { COLORS, FONTS } from '~constants/styles';
import { listItemWithComma } from '~utils/format';

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
        <p>{due}</p>
      </Summary>
      <Detail>
        <span>도면개수</span>
        <span>{`${count}개`}</span>
        <span>총 수량</span>
        <span>{`${amount}개`}</span>
        <span>가공방식</span>
        <span>{listItemWithComma(method)}</span>
        <span>재료</span>
        <span>{listItemWithComma(material)}</span>
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
  max-width: 366px;
  min-width: 320px;
  padding: 24px 16px;
  border: 1px solid ${COLORS.BACKGROUND.BASE};
  border-radius: 4px;

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

const Detail = styled.div`
  display: grid;
  grid-template-columns: 102px 1fr;
  grid-template-rows: repeat(4, 1fr);
  row-gap: 8px;
  padding: 32px 0;

  span {
    display: inline-flex;
    font-weight: ${FONTS.REGULAR};

    &:nth-of-type(even) {
      display: inline-block;
      font-weight: ${FONTS.BOLD};
    }
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default RequestCard;
