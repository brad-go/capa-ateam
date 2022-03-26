import React, { useCallback, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelect, useToggle, useFetch } from '~hooks/index';
import { Toggle, Button, BlankBoard } from '~components/common';
import { Navbar, SelectBox, RequestCard } from '~components/index';
import { ReactComponent as ResetSVG } from '~assets/svg/refresh.svg';
import { API_URL, MATERIALS, METHODS } from '~constants/api';
import { FONTS } from '~constants/styles';
import { isSelected } from './utils';
import type { APIReturnType, MaterialType, MethodType } from './types';

const App = () => {
  const [requests, setRequests] = useState<APIReturnType[]>([]);

  const { payload, isLoading } = useFetch(API_URL);
  const [selectedMethods, handleSelectedMethods, setSelectedMethods] =
    useSelect([]);
  const [selectedMaterials, handleSelectedMaterials, setSelectedMaterials] =
    useSelect([]);
  const [toggleActive, toggle] = useToggle(false);

  const filterReset = useCallback(() => {
    setSelectedMethods([]);
    setSelectedMaterials([]);
  }, [setSelectedMethods, setSelectedMaterials]);

  const filterInConsultation = useCallback(() => {
    setRequests((prev) => prev.filter(({ status }) => status === '상담중'));
  }, []);

  const filterByMethods = useCallback(() => {
    setRequests((prev) =>
      prev.filter(({ method }) =>
        selectedMethods.every((selection) =>
          method.includes(selection as MethodType),
        ),
      ),
    );
  }, [selectedMethods]);

  const filterByMaterials = useCallback(() => {
    setRequests((prev) =>
      prev.filter(({ material }) =>
        selectedMaterials.every((selection) =>
          material.includes(selection as MaterialType),
        ),
      ),
    );
  }, [selectedMaterials]);

  const renderRequsetCards = () => {
    if (!requests.length) return <BlankBoard />;

    return requests.map((request) => (
      <RequestCard key={request.id} requestInfo={request} />
    ));
  };

  useEffect(() => {
    if (payload) {
      setRequests(payload);
    }
  }, [payload]);

  useEffect(() => {
    if (toggleActive) filterInConsultation();
    if (selectedMethods.length) filterByMethods();
    if (selectedMaterials.length) filterByMaterials();

    return () => {
      if (payload) setRequests(payload);
    };
  }, [
    payload,
    setRequests,
    selectedMaterials,
    selectedMethods,
    toggleActive,
    filterInConsultation,
    filterByMethods,
    filterByMaterials,
  ]);

  return (
    <>
      <Navbar />
      <Page>
        <Content>
          <Header>
            <h2>들어온 요청</h2>
            <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
            <FilterSection>
              <Filter>
                <SelectBox
                  title="가공방식"
                  options={METHODS}
                  selected={selectedMethods}
                  onChange={handleSelectedMethods}
                />
                <SelectBox
                  title="재료"
                  options={MATERIALS}
                  selected={selectedMaterials}
                  onChange={handleSelectedMaterials}
                />
                {(isSelected(selectedMethods) ||
                  isSelected(selectedMaterials)) && (
                  <Button type="button" onClick={filterReset}>
                    <>
                      <ResetSVG />
                      필터링 리셋
                    </>
                  </Button>
                )}
              </Filter>
              <ToggleBox>
                <Toggle active={toggleActive} onChange={toggle} />
                <span>상담 중인 요청만 보기</span>
              </ToggleBox>
            </FilterSection>
          </Header>
          {!isLoading && (
            <Dashboard blank={requests.length}>
              {renderRequsetCards()}
            </Dashboard>
          )}
        </Content>
      </Page>
    </>
  );
};

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  padding: 60px 155px;
  overflow-y: auto;

  @media ${({ theme }) => theme.device.mobile} {
    height: 100vh;
    padding: 20px;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1130px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 50px;

  h2 {
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
  }

  p {
    font-size: 16px;
    font-weight: ${FONTS.REGULAR};
    line-height: 24px;
  }
`;

const FilterSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 32px 0;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  } ;
`;

const Filter = styled.div`
  display: flex;
  gap: 8px;

  button {
    display: flex;
    gap: 12px;
    border: none;
  }
`;

const ToggleBox = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const Dashboard = styled.section<{ blank: number }>`
  width: 100%;

  ${({ blank }) =>
    blank
      ? css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, auto));
          grid-template-rows: auto;
          justify-items: center;
          gap: 16px;
        `
      : css`
          display: flex;
        `}
`;

export default App;
