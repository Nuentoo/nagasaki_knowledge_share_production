## 特殊な変更点

### 変更: HTTPリクエストメソッドの大文字小文字
https://docs.astro.build/ja/guides/upgrade-to/v3/#%E5%A4%89%E6%9B%B4-http%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AE%E5%A4%A7%E6%96%87%E5%AD%97%E5%B0%8F%E6%96%87%E5%AD%97  
getはGET など

### 変更: 複数のJSXフレームワークの設定
https://docs.astro.build/ja/guides/upgrade-to/v3/#%E5%A4%89%E6%9B%B4-%E8%A4%87%E6%95%B0%E3%81%AEjsx%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF%E3%81%AE%E8%A8%AD%E5%AE%9A  
Astro v3.0では、複数のJSXフレームワークのインテグレーションがインストールされている場合、  
どのファイルにどのフレームワークを使用するかを指定するための、  
includeとexcludeという新しいインテグレーション設定オプションを使用する必要があります。  