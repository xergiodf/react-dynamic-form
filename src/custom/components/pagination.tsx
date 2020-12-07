import { Button, Flexbox, Padding } from '@/ui';

type PaginationProps = {
  length: number;
  step: number;
  onBack: (e: React.MouseEvent) => unknown;
  onNext: (e: React.MouseEvent) => unknown;
};

const Pagination = ({ length, step, onBack, onNext }: PaginationProps): JSX.Element => (
  <Padding size={24}>
    <Flexbox justifyContent="space-between" alignItems="center">
      <Button size="secondary" type="button" disabled={step === 1 || step > length} onClick={onBack}>
        Back
      </Button>
      <Button size="primary" type="button" onClick={onNext} disabled={step > length}>
        {(step === length && 'Finish') || 'Next'}
      </Button>
    </Flexbox>
  </Padding>
);

export default Pagination;
