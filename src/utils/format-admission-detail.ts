import { ResponseDetailAdmissionType } from '@/types/admission-type';

function formatAdmissionDetail(data: ResponseDetailAdmissionType[]) {
  if (data[0].type === 'PYEONIP') {
    return data.map((data) => {
      return { label: data.name, children: [] };
    });
  }

  const regex = /(.+)\((.+)\)/;
  const formatData = new Map();
  data.forEach((element) => {
    const match = element.name.match(regex);
    if (match) {
      const [, mainCategory, subCategory] = match;

      if (formatData.has(mainCategory)) {
        formatData.set(mainCategory, [...formatData.get(mainCategory), subCategory]);
      } else {
        formatData.set(mainCategory, [subCategory]);
      }
    }
  });

  return [...formatData].map((data) => {
    return { label: data[0], children: data[1] };
  });
}

export default formatAdmissionDetail;
