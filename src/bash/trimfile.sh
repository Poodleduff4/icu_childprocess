START=$(grep -n "SQL>" $1 | cut -f1 -d: | head -n 1)
END=$(grep -n "SQL>" $1 | cut -f1 -d: | tail -n 1)
LEN=$(($END-$START-2))
(cat $1 | tail +$(($START + 1)) | head -n $LEN | grep -v "selected.$") >output.csv