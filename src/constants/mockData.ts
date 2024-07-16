export interface TreeItem {
  id: number;
  name: string;
  children?: TreeItem[];
}

export const mockData: TreeItem[] = [
  {
    id: 1,
    name: 'Folder 1',
    children: [
      {
        id: 2,
        name: 'Subfolder 1.1',
        children: [
          {
            id: 3,
            name: 'File 1.1.1.txt'
          },
          {
            id: 4,
            name: 'File 1.1.2.jpg'
          },
          {
            id: 5,
            name: 'Subfolder 1.1.1',
            children: [
              {
                id: 6,
                name: 'File 1.1.1.1.pdf'
              },
              {
                id: 7,
                name: 'File 1.1.1.2.docx'
              }
            ]
          }
        ]
      },
      {
        id: 8,
        name: 'File 1.2.png'
      }
    ]
  },
  {
    id: 9,
    name: 'Folder 2',
    children: [
      {
        id: 10,
        name: 'File 2.1.xlsx'
      },
      {
        id: 11,
        name: 'Subfolder 2.2',
        children: [
          {
            id: 12,
            name: 'File 2.2.1.txt'
          }
        ]
      }
    ]
  }
];
