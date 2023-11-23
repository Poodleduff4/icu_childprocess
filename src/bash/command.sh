bash sqlcmd.sh "$1" >temp.txt
bash trimfile.sh "temp.txt"