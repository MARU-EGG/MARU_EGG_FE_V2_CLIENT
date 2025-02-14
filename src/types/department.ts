export interface ResponseCollegeType {
  collegeId: number;
  campus: '인문캠퍼스' | '자연캠퍼스';
  name: string;
}

export interface ResponseDepartmentType {
  departmentId: number;
  name: string;
  collegeId: number;
}
