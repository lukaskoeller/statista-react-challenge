export const paginate = <T>(array: T[], pageSize: number, pageNumber: number) => array
  .slice((pageNumber - 1) * pageSize, pageNumber * pageSize);