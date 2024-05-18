export const isActiveLink = (currentPath: string, expectedPath: string) => {
    return currentPath.includes(expectedPath);
  };