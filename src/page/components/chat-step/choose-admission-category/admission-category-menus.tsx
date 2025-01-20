import Selector from '@/components/selector/selector';
import { AdmissionType } from '@/types/admission-type';

interface Props {
  admissionType: AdmissionType;
  data: { label: string; children: string[] }[];
  selectCategory: (catgory: string) => void;
}

function AdmissionCategoryMenus({ data, selectCategory }: Props) {
  return (
    <div className="flex w-80 cursor-grab flex-nowrap items-start gap-5 overflow-x-auto">
      {data.map((option) => (
        <Selector>
          <Selector.Header>{`${option.label}전형`}</Selector.Header>
          {option.children.map((menu) => (
            <Selector.Option key={menu} onClick={() => selectCategory(menu)}>
              {menu}
            </Selector.Option>
          ))}
        </Selector>
      ))}
    </div>
  );
}

export default AdmissionCategoryMenus;
