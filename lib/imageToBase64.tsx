export function imageToBase64(file:File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if(reader.result){
            resolve((reader.result as string).split(',')[1]);
        }
      }
      reader.onerror = error => reject(error);
    });
  }
  