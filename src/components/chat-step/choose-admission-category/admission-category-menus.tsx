import Flyout from '@/components/flyout/flyout';
import FlyoutMenusWrapper from '@/components/flyout/flyout-menus-wrapper';
import Selector from '@/components/selector/selector';
import { AdmissionType } from '@/types/admission-type';

interface Props {
  admissionType: AdmissionType;
  data: { label: string; children: string[] }[];
  selectCategory: (catgory: string) => void;
}

function AdmissionCategoryMenus({ admissionType, data, selectCategory }: Props) {
  if (admissionType === 'PYEONIP') {
    return (
      <Selector>
        {data.map((option) => (
          <Selector.Option key={option.label} onClick={() => selectCategory(option.label)}>
            {option.label}
          </Selector.Option>
        ))}
      </Selector>
    );
  }

  return (
    <FlyoutMenusWrapper>
      {data.map((menu, index) => (
        <Flyout key={menu.label}>
          <Flyout.Trigger
            className={`${index === 0 ? 'rounded-t-lg' : index === data.length - 1 ? 'rounded-b-lg' : 'rounded-none'}`}
          >
            {menu.label}
          </Flyout.Trigger>
          <Flyout.Items>
            {menu.children.map((children) => (
              <Flyout.Item key={children} onClick={() => selectCategory(children)}>
                {children}
              </Flyout.Item>
            ))}
          </Flyout.Items>
        </Flyout>
      ))}
    </FlyoutMenusWrapper>
  );
}

export default AdmissionCategoryMenus;
