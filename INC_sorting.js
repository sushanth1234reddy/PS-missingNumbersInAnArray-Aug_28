let arr=[6,16,-5,10,3,0];
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[j]<arr[i]){ // since we are sorting in increasing order if next values is less than present value then swap the numbers
            let temp=0;
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr)