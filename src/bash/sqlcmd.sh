#!/bin/sh
sqlplus  -M "CSV ON" "sguardin/10316378@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=oracle.scs.ryerson.ca)(Port=1521))(CONNECT_DATA=(SID=orcl)))" <<EOF
$1;