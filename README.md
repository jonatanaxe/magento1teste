# magento1teste hibrido


## Subir arquivo magentoteste.sql configuracao de conexão

    <host><![CDATA[127.0.0.1]]></host>
    <username><![CDATA[root]]></username>
    <password><![CDATA[]]></password>
    <dbname><![CDATA[magentoteste]]></dbname>

## Urlbase

    magentoteste.test

##  Redis

    Caso nao use redis talvez de erro precisa desabiltar no local.xml a session e cache
    magentoteste/app/etc/local.xml