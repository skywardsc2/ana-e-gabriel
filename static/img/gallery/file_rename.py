# Pythono3 code to rename multiple 
# files in a directory or folder
  
# importing os module
import os
  
# Function to rename multiple files
def main():
    
    images = []
    for _, file in enumerate(os.listdir(".")):
        name, file_extension = os.path.splitext(file)
        if(file_extension == '.jpg' or file_extension == '.jpeg' or file_extension == '.png'):
            images.append(file)

    for i in range(len(images)):
        _, file_extension = os.path.splitext(images[i])
        src = './' + images[i]
        dst = "./" + 'aaa' + str(i) + file_extension
        
        os.rename(src, dst)

    images = []
    for _, file in enumerate(os.listdir(".")):
        name, file_extension = os.path.splitext(file)
        if(file_extension == '.jpg' or file_extension == '.jpeg' or file_extension == '.png'):
            images.append(file)

    for i in range(len(images)):
        _, file_extension = os.path.splitext(images[i])
        src = './' + images[i]
        dst = "./" + str(i) + file_extension
        
        os.rename(src, dst)
  
# Driver Code
if __name__ == '__main__':
      
    # Calling main() function
    main()