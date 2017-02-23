export const tmpl = (htmlStr) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        body {
            overflow: hidden
        }

        #mode {
            overflow: hidden;
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            /*background-color: #f5fcff;*/
            /*opacity: 0.5*/
            display: flex;
            flex: 1;
            flex-flow: column wrap;
        }

        #mode div:nth-child(odd) {
            flex: 2;
            height: 100%;
            flex-flow: row wrap;
            display: flex;
        }

        #mode>div:nth-child(2) {
            flex: 1;
            height: 100%;
            flex-flow: row wrap;
            display: flex;
        }

        #mode>div:nth-child(2)>div:nth-child(2) {
            flex: 2;
            height: 100%;
        }

        #content {
            overflow-y: hidden;
            word-wrap: break-word;
        }

        #footer {
            height: 16px;
            line-height: 16px;
            text-align: right;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 2;
            background-color: #bfbfbf;
            display: inline-block;
        }

        #footer_content {
            font-size: 14px;
            margin-right: 16px;
        }
    </style>
</head>

<body>
    <div id="mode">
        <div title="-1"></div>
        <div>
            <div title="-1"></div>
            <div title="0"></div>
            <div title="1"></div>
        </div>
        <div title="1"></div>
    </div>
    <div id="content">
        ${htmlStr}
    </div>
    <div id="footer">
        <span id="footer_content"></span>
    </div>
    <script>
        var content = document.getElementById('content');
        var mode = document.getElementById('mode');
        var footer_content = document.getElementById('footer_content');
        var pageIndex = 0;
        var total = Math.ceil(content.clientHeight / mode.clientHeight);
        footer_content.innerText = (pageIndex + 1) + ' / ' + total;
        mode.addEventListener('click', function (e) {
            pageIndex = e.target.title * 1 + pageIndex;
            const marginTop = (mode.clientHeight - 30) * -pageIndex;
            if (e.target.title==='0' || pageIndex < 0 || pageIndex >= total) {
                window.postMessage(e.target.title);
            } else {
                content.style.marginTop = marginTop + 'px';
                footer_content.innerText = (pageIndex + 1) + ' / ' + total;
            }
        }, true);
    </script>
</body>

</html>`;
