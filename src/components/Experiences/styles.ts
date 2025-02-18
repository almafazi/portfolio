import { WithTheme } from 'models/interfaces';
import styled from 'styled-components';

type ExperienceTitleProps = WithTheme;
type ExperienceDateProps = WithTheme;
type ExperienceJobTitleProps = WithTheme;
type ExperienceDescriptionProps = WithTheme;
type ChipProps = WithTheme;
type ExperiencesItemProps = WithTheme;

export const ExperiencesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const ExperienceTitle = styled.h3<ExperienceTitleProps>`
  font-weight: 600;
  font-size: ${({ theme }: ExperienceTitleProps) => theme.fontSizes.large};
  color: ${({ theme }: ExperienceTitleProps) => theme.colors.white};
`;

export const ExperienceDate = styled.p<ExperienceDateProps>`
  font-weight: 400;
  font-size: ${({ theme }: ExperienceDateProps) => theme.fontSizes.small};
  color: ${({ theme }: ExperienceDateProps) => theme.colors.typography.main};
`;

export const ExperienceJobTitle = styled.h4<ExperienceJobTitleProps>`
  font-weight: 600;
  font-size: ${({ theme }: ExperienceJobTitleProps) => theme.fontSizes.default};
  color: ${({ theme }: ExperienceJobTitleProps) => theme.colors.white};
`;

export const ExperienceDescription = styled.p<ExperienceDescriptionProps>`
  font-weight: 400;
  font-size: ${({ theme }: ExperienceDescriptionProps) => theme.fontSizes.default};
  color: ${({ theme }: ExperienceDescriptionProps) => theme.colors.typography.main};
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  margin: 8px 0px;
`;

export const Chip = styled.div<ChipProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  background-color: ${({ theme }: ChipProps) => theme.colors.primary.main};
  font-weight: 600;
  font-size: ${({ theme }: ChipProps) => theme.fontSizes.extraSmall};
  color: ${({ theme }: ChipProps) => theme.colors.white};
  text-transform: uppercase;
  padding: 2px 12px;
  border-radius: 10px;

  @media (min-width: ${({ theme }: ChipProps) => theme.breakpoints.sm}) {
    padding: 2px 18px;
    height: 24px;
    border-radius: 20px;
  }
`;

export const ExperienceItem = styled.div<ExperiencesItemProps>`
  margin: 16px 0px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;

  @media (min-width: ${({ theme }: ExperiencesItemProps) => theme.breakpoints.lg}) {
    width: 60%;
  }
`;
