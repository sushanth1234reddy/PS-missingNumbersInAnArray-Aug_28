let dec=[10,-4,0,8,9,15];
for(i=0;i<dec.length;i++){
    for(j=i+1;j<dec.length;j++){
        if(dec[j]>dec[i]){// since we are arrangeing in decreasing order, so if next value is greater than present value then swap.
            dec[i]=dec[i]+dec[j];
            dec[j]=dec[i]-dec[j];
            dec[i]=dec[i]-dec[j];

        }
    }
}
console.log(dec);