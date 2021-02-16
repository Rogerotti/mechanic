export interface IStep {
  number: number;
  header: string;
  subHeader: string;
  icon?: string;
}

export interface IHowItWorksProps {
  header: string;
  steps: IStep[];
}
