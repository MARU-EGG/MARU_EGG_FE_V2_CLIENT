import { useState } from 'react';
import PresetButton from '@/components/preset-button/preset-button';
import ADMISSION_QUICK_LINK from '@/constants/admission-quick-link';
import { AdmissionType } from '@/types/admission-type';
import { ADDMISSION } from '@/types/admission-type';

function AdmissionQuickLinkTabs({ initialAdmissionType }: { initialAdmissionType: AdmissionType | null }) {
  const [selectedAdmissionType, setSelectedAdmissionType] = useState(initialAdmissionType ?? 'SUSI');

  return (
    <div>
      <div className="flex gap-2">
        {Object.entries(ADDMISSION).map(([type, label]) => (
          <PresetButton
            key={type}
            selected={type === selectedAdmissionType}
            onClick={() => setSelectedAdmissionType(type as AdmissionType)}
          >
            {label}
          </PresetButton>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-6 text-headline">
        {ADMISSION_QUICK_LINK[selectedAdmissionType].map((link) => (
          <a key={link.id} className="cursor-pointer" href={link.link} target="_blank">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default AdmissionQuickLinkTabs;
