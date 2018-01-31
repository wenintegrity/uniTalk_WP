$(window).on('load', function () {

    /*$('button.tab').on('click', function (){
       var showUpTable = $(this).attr('data-attr');
       var showDownTable = $(this).attr('data-table');
       $('.table').hide();
       $('.'+showUpTable).show();
       $('.'+showDownTable).show();
       console.log(showUpTable+showDownTable);
    });*/

    $('.tabtable').on('click', function () {
        var showPowerTable = $(this).attr('data-table');
        var hidePretremor = $(this).attr('data-attr');
        // $('.tabtable').hide();
        $('.' + hidePretremor).toggle();
        $('.' + showPowerTable).toggle();
        $('.pretable1').toggle();
        $('.pretable2').toggle();
        $('.pretable3').toggle();
    });


    $('.tab1').on('click', function () {
        $(this).attr('disable', 'disabled');
        var load = $(this).attr('data-load');
        if (load != 'loaded') {
            //$('.tab1').attr('data-load', 'loaded');
            //$.post("http://switchmymind.chdev.com.ua/result.json", function (data) {
            $.post("http://switchmymind.chdev.com.ua/curl.php", function (data) {
                //var table = JSON.stringify(data);
                // var user = JSON.parse(table);
                var user = JSON.parse(data);
                var tableRow1 = user.sheet_data_1;
                /* var tableRow2 = user.sheet_data_2;
                 var tableRow3 = user.sheet_data_3;
                 var tremorRow1 = user.sheet_tremorSpectrum_1;
                 var tremorRow2 = user.sheet_tremorSpectrum_2;
                 var tremorRow3 = user.sheet_tremorSpectrum_3;*/
                var i, j;

                //first data table
                for (i = 0, j = 1; i < tableRow1.arrElements.length; i++, j++) {
                    $('.container-fluid .table1').append("<tr><td>" + j + "</td><td>" + tableRow1.arrElements[i].time + "</td><td>" + tableRow1.arrElements[i].iPad + "</td><td>" + tableRow1.arrElements[i].outMic0ed + "</td><td>" + tableRow1.arrElements[i].outMicFiltered + "</td><td>" + tableRow1.arrElements[i].outMicNrmalz + "</td><td>" + tableRow1.arrElements[i].outMicM50 + "</td></tr>");
                }

                /*  $.each(tableRow1, function(key, value){
                     console.log('key='+key+',value='+value);
                  });*/


                $('.pretable1 .count.forIPad').append(tableRow1.quartileForIPad.num);
                $('.pretable1 .median.forIPad').append(tableRow1.quartileForIPad.median);
                $('.pretable1 .threequartile.forIPad').append(tableRow1.quartileForIPad.q3);
                $('.pretable1 .onequartile.forIPad').append(tableRow1.quartileForIPad.q1);
                $('.pretable1 .average.forIPad').append(tableRow1.quartileForIPad.avg);
                $('.pretable1 .maximum.forIPad').append(tableRow1.quartileForIPad.max);
                $('.pretable1 .minimum.forIPad').append(tableRow1.quartileForIPad.min);

                $('.pretable1 .count.forMic0ed').append(tableRow1.quartileForOutMic0ed.num);
                $('.pretable1 .median.forMic0ed').append(tableRow1.quartileForOutMic0ed.median);
                $('.pretable1 .threequartile.forMic0ed').append(tableRow1.quartileForOutMic0ed.q3);
                $('.pretable1 .onequartile.forMic0ed').append(tableRow1.quartileForOutMic0ed.q1);
                $('.pretable1 .average.forMic0ed').append(tableRow1.quartileForOutMic0ed.avg);
                $('.pretable1 .maximum.forMic0ed').append(tableRow1.quartileForOutMic0ed.max);
                $('.pretable1 .minimum.forMic0ed').append(tableRow1.quartileForOutMic0ed.min);

                $('.pretable1 .count.forMicFilt').append(tableRow1.quartileForOutMicFilt.num);
                $('.pretable1 .median.forMicFilt').append(tableRow1.quartileForOutMicFilt.median);
                $('.pretable1 .threequartile.forMicFilt').append(tableRow1.quartileForOutMicFilt.q3);
                $('.pretable1 .onequartile.forMicFilt').append(tableRow1.quartileForOutMicFilt.q1);
                $('.pretable1 .average.forMicFilt').append(tableRow1.quartileForOutMicFilt.avg);
                $('.pretable1 .maximum.forMicFilt').append(tableRow1.quartileForOutMicFilt.max);
                $('.pretable1 .minimum.forMicFilt').append(tableRow1.quartileForOutMicFilt.min);

                $('.pretable1 .count.forMicNrmalz').append(tableRow1.quartileForOutMicNrmalz.num);
                $('.pretable1 .median.forMicNrmalz').append(tableRow1.quartileForOutMicNrmalz.median);
                $('.pretable1 .threequartile.forMicNrmalz').append(tableRow1.quartileForOutMicNrmalz.q3);
                $('.pretable1 .onequartile.forMicNrmalz').append(tableRow1.quartileForOutMicNrmalz.q1);
                $('.pretable1 .average.forMicNrmalz').append(tableRow1.quartileForOutMicNrmalz.avg);
                $('.pretable1 .maximum.forMicNrmalz').append(tableRow1.quartileForOutMicNrmalz.max);
                $('.pretable1 .minimum.forMicNrmalz').append(tableRow1.quartileForOutMicNrmalz.min);

                $('.tab1').attr('data-load', 'loaded');
                $('.table').hide();
                $('.table1').show();
                $('.pretable1').show();
            });
        } else {
            $('.table').hide();
            $('.table1').show();
            $('.pretable1').show();
        }
    });

    $('.tab2').on('click', function () {
        $(this).attr('disable', 'disabled');
        var load = $(this).attr('data-load');
        if (load != 'loaded') {
            $.post("http://switchmymind.chdev.com.ua/curl.php", function (data) {
                //var table = JSON.stringify(data);
                // var user = JSON.parse(table);
                var user = JSON.parse(data);
                var tableRow2 = user.sheet_data_2;
                var i, j;
                //Second data table
                for (i = 0, j = 1; i < tableRow2.arrElements.length; i++, j++) {
                    $('.container-fluid .table2').append("<tr><td>" + j + "</td><td>" + tableRow2.arrElements[i].time + "</td><td>" + tableRow2.arrElements[i].iPad + "</td><td>" + tableRow2.arrElements[i].outMic0ed + "</td><td>" + tableRow2.arrElements[i].outMicFiltered + "</td><td>" + tableRow2.arrElements[i].outMicNrmalz + "</td><td>" + tableRow2.arrElements[i].outMicM50 + "</td></tr>");
                }

                $('.pretable2 .count.forIPad').append(tableRow2.quartileForIPad.num);
                $('.pretable2 .median.forIPad').append(tableRow2.quartileForIPad.median);
                $('.pretable2 .threequartile.forIPad').append(tableRow2.quartileForIPad.q3);
                $('.pretable2 .onequartile.forIPad').append(tableRow2.quartileForIPad.q1);
                $('.pretable2 .average.forIPad').append(tableRow2.quartileForIPad.avg);
                $('.pretable2 .maximum.forIPad').append(tableRow2.quartileForIPad.max);
                $('.pretable2 .minimum.forIPad').append(tableRow2.quartileForIPad.min);

                $('.pretable2 .count.forMic0ed').append(tableRow2.quartileForOutMic0ed.num);
                $('.pretable2 .median.forMic0ed').append(tableRow2.quartileForOutMic0ed.median);
                $('.pretable2 .threequartile.forMic0ed').append(tableRow2.quartileForOutMic0ed.q3);
                $('.pretable2 .onequartile.forMic0ed').append(tableRow2.quartileForOutMic0ed.q1);
                $('.pretable2 .average.forMic0ed').append(tableRow2.quartileForOutMic0ed.avg);
                $('.pretable2 .maximum.forMic0ed').append(tableRow2.quartileForOutMic0ed.max);
                $('.pretable2 .minimum.forMic0ed').append(tableRow2.quartileForOutMic0ed.min);

                $('.pretable2 .count.forMicFilt').append(tableRow2.quartileForOutMicFilt.num);
                $('.pretable2 .median.forMicFilt').append(tableRow2.quartileForOutMicFilt.median);
                $('.pretable2 .threequartile.forMicFilt').append(tableRow2.quartileForOutMicFilt.q3);
                $('.pretable2 .onequartile.forMicFilt').append(tableRow2.quartileForOutMicFilt.q1);
                $('.pretable2 .average.forMicFilt').append(tableRow2.quartileForOutMicFilt.avg);
                $('.pretable2 .maximum.forMicFilt').append(tableRow2.quartileForOutMicFilt.max);
                $('.pretable2 .minimum.forMicFilt').append(tableRow2.quartileForOutMicFilt.min);

                $('.pretable2 .count.forMicNrmalz').append(tableRow2.quartileForOutMicNrmalz.num);
                $('.pretable2 .median.forMicNrmalz').append(tableRow2.quartileForOutMicNrmalz.median);
                $('.pretable2 .threequartile.forMicNrmalz').append(tableRow2.quartileForOutMicNrmalz.q3);
                $('.pretable2 .onequartile.forMicNrmalz').append(tableRow2.quartileForOutMicNrmalz.q1);
                $('.pretable2 .average.forMicNrmalz').append(tableRow2.quartileForOutMicNrmalz.avg);
                $('.pretable2 .maximum.forMicNrmalz').append(tableRow2.quartileForOutMicNrmalz.max);
                $('.pretable2 .minimum.forMicNrmalz').append(tableRow2.quartileForOutMicNrmalz.min);

                $('.tab2').attr('data-load', 'loaded');
                $('.table').hide();
                $('.table2').show();
                $('.pretable2').show();
            });
        } else {
            $('.table').hide();
            $('.table2').show();
            $('.pretable2').show();
        }
    });

    $('.tab3').on('click', function () {
        $(this).attr('disable', 'disabled');
        var load = $(this).attr('data-load');
        if (load != 'loaded') {
            $.post("http://switchmymind.chdev.com.ua/curl.php", function (data) {
                //var table = JSON.stringify(data);
                // var user = JSON.parse(table);
                var user = JSON.parse(data);
                var tableRow3 = user.sheet_data_3;
                var i, j;
                //Third data table
                for (i = 0, j = 1; i < tableRow3.arrElements.length; i++, j++) {
                    $('.container-fluid .table3').append("<tr><td>" + j + "</td><td>" + tableRow3.arrElements[i].time + "</td><td>" + tableRow3.arrElements[i].iPad + "</td><td>" + tableRow3.arrElements[i].outMic0ed + "</td><td>" + tableRow3.arrElements[i].outMicFiltered + "</td><td>" + tableRow3.arrElements[i].outMicNrmalz + "</td><td>" + tableRow3.arrElements[i].outMicM50 + "</td></tr>");
                }

                $('.pretable3 .count.forIPad').append(tableRow3.quartileForIPad.num);
                $('.pretable3 .median.forIPad').append(tableRow3.quartileForIPad.median);
                $('.pretable3 .threequartile.forIPad').append(tableRow3.quartileForIPad.q3);
                $('.pretable3 .onequartile.forIPad').append(tableRow3.quartileForIPad.q1);
                $('.pretable3 .average.forIPad').append(tableRow3.quartileForIPad.avg);
                $('.pretable3 .maximum.forIPad').append(tableRow3.quartileForIPad.max);
                $('.pretable3 .minimum.forIPad').append(tableRow3.quartileForIPad.min);

                $('.pretable3 .count.forMic0ed').append(tableRow3.quartileForOutMic0ed.num);
                $('.pretable3 .median.forMic0ed').append(tableRow3.quartileForOutMic0ed.median);
                $('.pretable3 .threequartile.forMic0ed').append(tableRow3.quartileForOutMic0ed.q3);
                $('.pretable3 .onequartile.forMic0ed').append(tableRow3.quartileForOutMic0ed.q1);
                $('.pretable3 .average.forMic0ed').append(tableRow3.quartileForOutMic0ed.avg);
                $('.pretable3 .maximum.forMic0ed').append(tableRow3.quartileForOutMic0ed.max);
                $('.pretable3 .minimum.forMic0ed').append(tableRow3.quartileForOutMic0ed.min);

                $('.pretable3 .count.forMicFilt').append(tableRow3.quartileForOutMicFilt.num);
                $('.pretable3 .median.forMicFilt').append(tableRow3.quartileForOutMicFilt.median);
                $('.pretable3 .threequartile.forMicFilt').append(tableRow3.quartileForOutMicFilt.q3);
                $('.pretable3 .onequartile.forMicFilt').append(tableRow3.quartileForOutMicFilt.q1);
                $('.pretable3 .average.forMicFilt').append(tableRow3.quartileForOutMicFilt.avg);
                $('.pretable3 .maximum.forMicFilt').append(tableRow3.quartileForOutMicFilt.max);
                $('.pretable3 .minimum.forMicFilt').append(tableRow3.quartileForOutMicFilt.min);

                $('.pretable3 .count.forMicNrmalz').append(tableRow3.quartileForOutMicNrmalz.num);
                $('.pretable3 .median.forMicNrmalz').append(tableRow3.quartileForOutMicNrmalz.median);
                $('.pretable3 .threequartile.forMicNrmalz').append(tableRow3.quartileForOutMicNrmalz.q3);
                $('.pretable3 .onequartile.forMicNrmalz').append(tableRow3.quartileForOutMicNrmalz.q1);
                $('.pretable3 .average.forMicNrmalz').append(tableRow3.quartileForOutMicNrmalz.avg);
                $('.pretable3 .maximum.forMicNrmalz').append(tableRow3.quartileForOutMicNrmalz.max);
                $('.pretable3 .minimum.forMicNrmalz').append(tableRow3.quartileForOutMicNrmalz.min);

                $('.tab3').attr('data-load', 'loaded');
                $('.table').hide();
                $('.table3').show();
                $('.pretable3').show();
            });
        } else {
            $('.table').hide();
            $('.table3').show();
            $('.pretable3').show();
        }
    });

    $('.tab4').on('click', function () {
        $(this).attr('disable', 'disabled');
        var load = $(this).attr('data-load');
        if (load != 'loaded') {
            //$.post("http://switchmymind.chdev.com.ua/result.json", function (data) {
            //$.get("http://switchmymind.chdev.com.ua:3002/calculation", function (data) {

            $.post("http://switchmymind.chdev.com.ua/curl.php", function (data) {
                //var table = JSON.stringify(data);
                // var user = JSON.parse(table);
                var user = JSON.parse(data);
                var tremorRow1 = user.sheet_tremorSpectrum_1;
                var i, j;
                console.log(tremorRow1);
                //tremor1 data table

                $('.container-fluid .tremor1').append("<th>row</th>");

                for (i = 0, j = 1; i < user.headers_sheet_tremorSpectrum.length; i++, j++) {
                    $('.container-fluid .tremor1 tr.headrow').append("<th>" + user.headers_sheet_tremorSpectrum[i].nameCol + "</th>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrFftFreq.length; i++, j++) {
                    $('.container-fluid .tremor1').append("<tr data-count=" + i + "><td>" + j + "</td><td>" + tremorRow1.arrFftFreq[i] + "</td></tr>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrFftMag.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrFftMag[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrFftComplex.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrFftComplex[i][0] + "</br>" + tremorRow1.arrFftComplex[i][1] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrConstABS.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrConstABS[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrFreqMag.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrFreqMag[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrConstABS_NO.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrConstABS_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrFreqMag_NO.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrFreqMag_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrConstAbsNormal.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrConstAbsNormal[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrConstAbsNormal_NO.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrConstAbsNormal_NO[i] + "</td>");
                }
                /*  for (i = 0, j = 1; i < tremorRow1.arrConstABS_NO.length; i++, j++) {
                      $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrConstABS_NO[i] + "</td>");
                  }*/


                for (i = 0, j = 1; i < tremorRow1.arrFreqMagNormal.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrFreqMagNormal[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrFreqMagNormal_NO.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrFreqMagNormal_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrFreqMagDiff.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrFreqMagDiff[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrFreqMagDiff_NO.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrFreqMagDiff_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrFreqMagDiffNormal.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrFreqMagDiffNormal[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrFreqMagDiffNormal_NO.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrFreqMagDiffNormal_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow1.arrFftMagNormalized.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrFftMagNormalized[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow1.lowerAndHigherFreq_1.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>freq=" + tremorRow1.lowerAndHigherFreq_1[i].freq + "</br>power=" + tremorRow1.lowerAndHigherFreq_1[i].power + "</td>");
                }
                /*for (i = 0, j = 1; i < tremorRow1.lowerAndHigherFreq_1.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.lowerAndHigherFreq_1[i].mag + "</td>");
                }*/
                for (i = 0, j = 1; i < tremorRow1.colSumRaw.arr.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.colSumRaw.arr[i] + "</td></tr>");
                }
                for (i = 0, j = 1; i < tremorRow1.colSumNormalized.arr.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.colSumNormalized.arr[i] + "</td>");
                }
                $('.container-fluid .tremor1 tr[data-count=' + tremorRow1.colSumNormalized.arr.length + ']').append("<td>" + tremorRow1.colSumNormalized.avgNotesMusic + "</td>");
                $('.container-fluid .tremor1 tr[data-count=' + +tremorRow1.colSumNormalized.arr.length + 1 + ']').append("<td>" + tremorRow1.colSumNormalized.stDevNotesMusic + "</td>");

                for (i = 0, j = 1; i < tremorRow1.arrFftMagRawSmoothed.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrFftMagRawSmoothed[i] + "</td>");
                }


                for (i = 0, j = 1; i < tremorRow1.arrFftMagNormalizedSmoothed.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrFftMagNormalizedSmoothed[i] + "</td>");
                }
                $('.container-fluid .tremor1 tr[data-count=' + tremorRow1.arrFftMagNormalizedSmoothed.length + ']').append("<td>" + tremorRow1.colSumRaw.avgNotesMusic + "</td>");
                $('.container-fluid .tremor1 tr[data-count=' + +tremorRow1.arrFftMagNormalizedSmoothed.length + 1 + ']').append("<td>" + tremorRow1.colSumRaw.stDevNotesMusic + "</td>");


                for (i = 0, j = 1; i < tremorRow1.lowerAndHigherFreq_2.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>freq=" + tremorRow1.lowerAndHigherFreq_2[i].freq + "</br>power=" + tremorRow1.lowerAndHigherFreq_2[i].power + "</td>");
                }
                /* for (i = 0, j = 1; i < tremorRow1.lowerAndHigherFreq_2.length; i++, j++) {
                     $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.lowerAndHigherFreq_2[i].mag + "</td>");
                 }*/

                for (i = 0, j = 1; i < tremorRow1.colSumSmoothed.arr.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.colSumSmoothed.arr[i] + "</td>");
                }
                $('.container-fluid .tremor1 tr[data-count=' + tremorRow1.colSumSmoothed.arr.length + ']').append("<td>" + tremorRow1.colSumSmoothed.avgNotesMusic + "</td>");
                $('.container-fluid .tremor1 tr[data-count=' + +tremorRow1.colSumSmoothed.arr.length + 1 + ']').append("<td>" + tremorRow1.colSumSmoothed.stDevNotesMusic + "</td>");


                for (i = 0, j = 1; i < tremorRow1.colSumSmthNormed.arr.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.colSumSmthNormed.arr[i] + "</td>");
                }

                $('.container-fluid .tremor1 tr[data-count=' + tremorRow1.colSumSmthNormed.arr.length + ']').append("<td>" + tremorRow1.colSumSmthNormed.avgNotesMusic + "</td>");
                $('.container-fluid .tremor1 tr[data-count=' + +tremorRow1.colSumSmthNormed.arr.length + 1 + ']').append("<td>" + tremorRow1.colSumSmthNormed.stDevNotesMusic + "</td>");


                for (i = 0, j = 1; i < tremorRow1.arrSumSmthNorm_1.arrResult.length; i++, j++) {
                    $('.container-fluid .tremor1 tr[data-count=' + i + ']').append("<td>" + tremorRow1.arrSumSmthNorm_1.arrResult[i] + "</td>");
                }


                $('.container-fluid .tremor1 tr[data-count=' + tremorRow1.arrSumSmthNorm_1.arrResult.length + ']').append("<td>" + tremorRow1.arrSumSmthNorm_1.avgNotesMusic + "</td>");
                $('.container-fluid .tremor1 tr[data-count=' + +tremorRow1.arrSumSmthNorm_1.arrResult.length + 1 + ']').append("<td>" + tremorRow1.arrSumSmthNorm_1.stDevNotesMusic + "</td>");


                $('.pretremor1 tr.tremData').append('<td>' + tremorRow1.maxConstAbs + '</td><td>' + tremorRow1.maxConstAbs_NO + '</td><td>' + tremorRow1.maxFreqMag + '</td><td>' + tremorRow1.maxFreqMag_NO + '</td><td>' + tremorRow1.averageConstAbs + '</td><td>' + tremorRow1.averageConstAbs_NO + '</td><td>' + tremorRow1.averageFreqMag + '</td><td>' + tremorRow1.averageFreqMag_NO + '</td><td>' + tremorRow1.averageD23_635 + '</td><td>' + tremorRow1.stanDotClone + '</td>');

                $('.pretremor1 tr.tremDataNext').append("<td>" + tremorRow1.divisionaverageValuesFftMag_23_404_405_635 + "</td><td>" + tremorRow1.divisionaverageValuesFftMag_23_329_329_635 + "</td><td>q3=" + tremorRow1.quartileFftMag_23_635.q3 + "</br>max=" + tremorRow1.quartileFftMag_23_635.max + "</td><td>" + tremorRow1.divisionQuartOnMaxFftMag + "</td><td>" + tremorRow1.division_q3_average + "</td>");

                $('.pretremor1 tr.tremDataNext').append('<td>' + tremorRow1.maxFreqMagDiff + '</td><td>' + tremorRow1.maxFreqMagDiff_NO + '</td>');

                $('.pretremor1 tr.tremDataNextNew').append('<td>' + tremorRow1.objSolfg.sideralDay + '</td><td>' + tremorRow1.objSolfg.liberating + '</td><td>' + tremorRow1.objSolfg.breakemo + '</td><td>' + tremorRow1.objSolfg.reprLove + '</td><td>' + tremorRow1.objSolfg.connect + '</td><td>' + tremorRow1.objSolfg.intuition + '</td><td>' + tremorRow1.objSolfg.spirorder + '</td><td>' + tremorRow1.objSolfg.mixSolft + '</td>');

                $('.pretremor1 tr.tremDataNextNewNext').append('<td>' + tremorRow1.powerOctaves + '</td><td>' + tremorRow1.avgPowerOctaves + '</td><td>' + tremorRow1.maxFftMagNormalized + '</td>');

                $('.pretremor1 tr.tremDataNextNewNext').append('<td>' + tremorRow1.totalMusicRaw + '</td><td>' + tremorRow1.totalMusicRawStDev + '</td><td>' + tremorRow1.totalMusicSmth + '</td><td>' + tremorRow1.totalMusicSmthStDev + '</td><td>' + tremorRow1.totalMusicRaw_Smth + '</td>');

                $('.pretremor1 tr.tremNextRow').append('<td>' + tremorRow1.sumSmoothedStDev + '</td><td>' + tremorRow1.sumNormalizedAvg + '</td><td>' + tremorRow1.sumSmthNormedAvg + '</td>');
                // $('.pretremor1').append('<tr><td>' + tremorRow1.sumSmoothedStDev + '</td><td>' + tremorRow1.sumNormalizedAvg + '</td><td>' + tremorRow1.sumSmthNormedAvg + '</td></tr>');

                $('.pretremor1 tr.tremNextRow').append('<td>' + tremorRow1.colSumSmthNorm_1Avg + '</td>');
                // $('.pretremor1').append('<td>' + tremorRow1.colSumSmthNorm_1Avg + '</td>');


                $('.tab4').attr('data-load', 'loaded');
                $('.table').hide();
                $('.tremor1').show();
                $('.pretremor1').show();
            });
        } else {
            $('.table').hide();
            $('.tremor1').show();
            $('.pretremor1').show();
        }
    });


    $('.tab5').on('click', function () {
        $(this).attr('disable', 'disabled');
        var load = $(this).attr('data-load');
        if (load != 'loaded') {
            $.post("http://switchmymind.chdev.com.ua/curl.php", function (data) {
                //var table = JSON.stringify(data);
                // var user = JSON.parse(table);
                var user = JSON.parse(data);
                var tremorRow2 = user.sheet_tremorSpectrum_2;
                var i, j;
                //tremor2 data table
                $('.container-fluid .tremor2').append("<th>row</th>");

                for (i = 0, j = 1; i < user.headers_sheet_tremorSpectrum.length; i++, j++) {
                    $('.container-fluid .tremor2 tr.headrow').append("<th>" + user.headers_sheet_tremorSpectrum[i].nameCol + "</th>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrFftFreq.length; i++, j++) {
                    $('.container-fluid .tremor2').append("<tr data-count=" + i + "><td>" + j + "</td><td>" + tremorRow2.arrFftFreq[i] + "</td></tr>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrFftMag.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrFftMag[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrFftComplex.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrFftComplex[i][0] + "</br>" + tremorRow2.arrFftComplex[i][1] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrConstABS.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrConstABS[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrFreqMag.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrFreqMag[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrConstABS_NO.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrConstABS_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrFreqMag_NO.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrFreqMag_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrConstAbsNormal.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrConstAbsNormal[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrConstAbsNormal_NO.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrConstAbsNormal_NO[i] + "</td>");
                }
                /*  for (i = 0, j = 1; i < tremorRow2.arrConstABS_NO.length; i++, j++) {
                      $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrConstABS_NO[i] + "</td>");
                  }*/


                for (i = 0, j = 1; i < tremorRow2.arrFreqMagNormal.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrFreqMagNormal[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrFreqMagNormal_NO.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrFreqMagNormal_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrFreqMagDiff.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrFreqMagDiff[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrFreqMagDiff_NO.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrFreqMagDiff_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrFreqMagDiffNormal.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrFreqMagDiffNormal[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrFreqMagDiffNormal_NO.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrFreqMagDiffNormal_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow2.arrFftMagNormalized.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrFftMagNormalized[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow2.lowerAndHigherFreq_1.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>freq=" + tremorRow2.lowerAndHigherFreq_1[i].freq + "</br>power=" + tremorRow2.lowerAndHigherFreq_1[i].power + "</td>");
                }
                /*for (i = 0, j = 1; i < tremorRow2.lowerAndHigherFreq_1.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.lowerAndHigherFreq_1[i].mag + "</td>");
                }*/
                for (i = 0, j = 1; i < tremorRow2.colSumRaw.arr.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.colSumRaw.arr[i] + "</td></tr>");
                }
                for (i = 0, j = 1; i < tremorRow2.colSumNormalized.arr.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.colSumNormalized.arr[i] + "</td>");
                }
                $('.container-fluid .tremor2 tr[data-count=' + tremorRow2.colSumNormalized.arr.length + ']').append("<td>" + tremorRow2.colSumNormalized.avgNotesMusic + "</td>");
                $('.container-fluid .tremor2 tr[data-count=' + +tremorRow2.colSumNormalized.arr.length + 1 + ']').append("<td>" + tremorRow2.colSumNormalized.stDevNotesMusic + "</td>");

                for (i = 0, j = 1; i < tremorRow2.arrFftMagRawSmoothed.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrFftMagRawSmoothed[i] + "</td>");
                }


                for (i = 0, j = 1; i < tremorRow2.arrFftMagNormalizedSmoothed.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrFftMagNormalizedSmoothed[i] + "</td>");
                }
                $('.container-fluid .tremor2 tr[data-count=' + tremorRow2.arrFftMagNormalizedSmoothed.length + ']').append("<td>" + tremorRow2.colSumRaw.avgNotesMusic + "</td>");
                $('.container-fluid .tremor2 tr[data-count=' + +tremorRow2.arrFftMagNormalizedSmoothed.length + 1 + ']').append("<td>" + tremorRow2.colSumRaw.stDevNotesMusic + "</td>");


                for (i = 0, j = 1; i < tremorRow2.lowerAndHigherFreq_2.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>freq=" + tremorRow2.lowerAndHigherFreq_2[i].freq + "</br>power=" + tremorRow2.lowerAndHigherFreq_2[i].power + "</td>");
                }
                /* for (i = 0, j = 1; i < tremorRow2.lowerAndHigherFreq_2.length; i++, j++) {
                     $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.lowerAndHigherFreq_2[i].mag + "</td>");
                 }*/

                for (i = 0, j = 1; i < tremorRow2.colSumSmoothed.arr.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.colSumSmoothed.arr[i] + "</td>");
                }
                $('.container-fluid .tremor2 tr[data-count=' + tremorRow2.colSumSmoothed.arr.length + ']').append("<td>" + tremorRow2.colSumSmoothed.avgNotesMusic + "</td>");
                $('.container-fluid .tremor2 tr[data-count=' + +tremorRow2.colSumSmoothed.arr.length + 1 + ']').append("<td>" + tremorRow2.colSumSmoothed.stDevNotesMusic + "</td>");


                for (i = 0, j = 1; i < tremorRow2.colSumSmthNormed.arr.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.colSumSmthNormed.arr[i] + "</td>");
                }

                $('.container-fluid .tremor2 tr[data-count=' + tremorRow2.colSumSmthNormed.arr.length + ']').append("<td>" + tremorRow2.colSumSmthNormed.avgNotesMusic + "</td>");
                $('.container-fluid .tremor2 tr[data-count=' + +tremorRow2.colSumSmthNormed.arr.length + 1 + ']').append("<td>" + tremorRow2.colSumSmthNormed.stDevNotesMusic + "</td>");


                for (i = 0, j = 1; i < tremorRow2.arrSumSmthNorm_1.arrResult.length; i++, j++) {
                    $('.container-fluid .tremor2 tr[data-count=' + i + ']').append("<td>" + tremorRow2.arrSumSmthNorm_1.arrResult[i] + "</td>");
                }


                $('.container-fluid .tremor2 tr[data-count=' + tremorRow2.arrSumSmthNorm_1.arrResult.length + ']').append("<td>" + tremorRow2.arrSumSmthNorm_1.avgNotesMusic + "</td>");
                $('.container-fluid .tremor2 tr[data-count=' + +tremorRow2.arrSumSmthNorm_1.arrResult.length + 1 + ']').append("<td>" + tremorRow2.arrSumSmthNorm_1.stDevNotesMusic + "</td>");


                $('.pretremor2 tr.tremData').append('<td>' + tremorRow2.maxConstAbs + '</td><td>' + tremorRow2.maxConstAbs_NO + '</td><td>' + tremorRow2.maxFreqMag + '</td><td>' + tremorRow2.maxFreqMag_NO + '</td><td>' + tremorRow2.averageConstAbs + '</td><td>' + tremorRow2.averageConstAbs_NO + '</td><td>' + tremorRow2.averageFreqMag + '</td><td>' + tremorRow2.averageFreqMag_NO + '</td><td>' + tremorRow2.averageD23_635 + '</td><td>' + tremorRow2.stanDotClone + '</td>');

                $('.pretremor2 tr.tremDataNext').append("<td>" + tremorRow2.divisionaverageValuesFftMag_23_404_405_635 + "</td><td>" + tremorRow2.divisionaverageValuesFftMag_23_329_329_635 + "</td><td>q3=" + tremorRow2.quartileFftMag_23_635.q3 + "</br>max=" + tremorRow2.quartileFftMag_23_635.max + "</td><td>" + tremorRow2.divisionQuartOnMaxFftMag + "</td><td>" + tremorRow2.division_q3_average + "</td>");

                $('.pretremor2 tr.tremDataNext').append('<td>' + tremorRow2.maxFreqMagDiff + '</td><td>' + tremorRow2.maxFreqMagDiff_NO + '</td>');

                $('.pretremor2 tr.tremDataNextNew').append('<td>' + tremorRow2.objSolfg.sideralDay + '</td><td>' + tremorRow2.objSolfg.liberating + '</td><td>' + tremorRow2.objSolfg.breakemo + '</td><td>' + tremorRow2.objSolfg.reprLove + '</td><td>' + tremorRow2.objSolfg.connect + '</td><td>' + tremorRow2.objSolfg.intuition + '</td><td>' + tremorRow2.objSolfg.spirorder + '</td><td>' + tremorRow2.objSolfg.mixSolft + '</td>');

                $('.pretremor2 tr.tremDataNextNewNext').append('<td>' + tremorRow2.powerOctaves + '</td><td>' + tremorRow2.avgPowerOctaves + '</td><td>' + tremorRow2.maxFftMagNormalized + '</td>');

                $('.pretremor2 tr.tremDataNextNewNext').append('<td>' + tremorRow2.totalMusicRaw + '</td><td>' + tremorRow2.totalMusicRawStDev + '</td><td>' + tremorRow2.totalMusicSmth + '</td><td>' + tremorRow2.totalMusicSmthStDev + '</td><td>' + tremorRow2.totalMusicRaw_Smth + '</td>');

                $('.pretremor2 tr.tremNextRow').append('<td>' + tremorRow2.sumSmoothedStDev + '</td><td>' + tremorRow2.sumNormalizedAvg + '</td><td>' + tremorRow2.sumSmthNormedAvg + '</td>');
                // $('.pretremor2').append('<tr><td>' + tremorRow2.sumSmoothedStDev + '</td><td>' + tremorRow2.sumNormalizedAvg + '</td><td>' + tremorRow2.sumSmthNormedAvg + '</td></tr>');

                $('.pretremor2 tr.tremNextRow').append('<td>' + tremorRow2.colSumSmthNorm_1Avg + '</td>');
                // $('.pretremor2').append('<td>' + tremorRow2.colSumSmthNorm_1Avg + '</td>');


                $('.tab5').attr('data-load', 'loaded');
                $('.table').hide();
                $('.tremor2').show();
                $('.pretremor2').show();
            });
        } else {
            $('.table').hide();
            $('.tremor2').show();
            $('.pretremor2').show();
        }
    });

    $('.tab6').on('click', function () {
        $(this).attr('disable', 'disabled');
        var load = $(this).attr('data-load');
        if (load != 'loaded') {
            $.post("http://switchmymind.chdev.com.ua/curl.php", function (data) {
                //var table = JSON.stringify(data);
                // var user = JSON.parse(table);
                var user = JSON.parse(data);
                var tremorRow3 = user.sheet_tremorSpectrum_3;
                var i, j;
                //tremor3 data table
                $('.container-fluid .tremor3').append("<th>row</th>");

                for (i = 0, j = 1; i < user.headers_sheet_tremorSpectrum.length; i++, j++) {
                    $('.container-fluid .tremor3 tr.headrow').append("<th>" + user.headers_sheet_tremorSpectrum[i].nameCol + "</th>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrFftFreq.length; i++, j++) {
                    $('.container-fluid .tremor3').append("<tr data-count=" + i + "><td>" + j + "</td><td>" + tremorRow3.arrFftFreq[i] + "</td></tr>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrFftMag.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrFftMag[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrFftComplex.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrFftComplex[i][0] + "</br>" + tremorRow3.arrFftComplex[i][1] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrConstABS.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrConstABS[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrFreqMag.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrFreqMag[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrConstABS_NO.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrConstABS_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrFreqMag_NO.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrFreqMag_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrConstAbsNormal.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrConstAbsNormal[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrConstAbsNormal_NO.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrConstAbsNormal_NO[i] + "</td>");
                }
                /*  for (i = 0, j = 1; i < tremorRow3.arrConstABS_NO.length; i++, j++) {
                      $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrConstABS_NO[i] + "</td>");
                  }*/


                for (i = 0, j = 1; i < tremorRow3.arrFreqMagNormal.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrFreqMagNormal[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrFreqMagNormal_NO.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrFreqMagNormal_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrFreqMagDiff.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrFreqMagDiff[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrFreqMagDiff_NO.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrFreqMagDiff_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrFreqMagDiffNormal.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrFreqMagDiffNormal[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrFreqMagDiffNormal_NO.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrFreqMagDiffNormal_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.arrFftMagNormalized.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrFftMagNormalized[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.lowerAndHigherFreq_1.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>freq=" + tremorRow3.lowerAndHigherFreq_1[i].freq + "</br>power=" + tremorRow3.lowerAndHigherFreq_1[i].power + "</td>");
                }
                /*for (i = 0, j = 1; i < tremorRow3.lowerAndHigherFreq_1.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.lowerAndHigherFreq_1[i].mag + "</td>");
                }*/
                for (i = 0, j = 1; i < tremorRow3.colSumRaw.arr.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.colSumRaw.arr[i] + "</td></tr>");
                }
                for (i = 0, j = 1; i < tremorRow3.lowerAndHigherFreq_2.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>freq=" + tremorRow3.lowerAndHigherFreq_2[i].freq + "</br>power=" + tremorRow3.lowerAndHigherFreq_2[i].mag + "</td>");
                }
                for (i = 0, j = 1; i < tremorRow3.colSumNormalized.arr.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.colSumNormalized.arr[i] + "</td>");
                }
                $('.container-fluid .tremor3 tr[data-count=' + tremorRow3.colSumNormalized.arr.length + ']').append("<td>" + tremorRow3.colSumNormalized.avgNotesMusic + "</td>");
                $('.container-fluid .tremor3 tr[data-count=' + +tremorRow3.colSumNormalized.arr.length + 1 + ']').append("<td>" + tremorRow3.colSumNormalized.stDevNotesMusic + "</td>");

                for (i = 0, j = 1; i < tremorRow3.arrFftMagRawSmoothed.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrFftMagRawSmoothed[i] + "</td>");
                }


                for (i = 0, j = 1; i < tremorRow3.arrFftMagNormalizedSmoothed.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrFftMagNormalizedSmoothed[i] + "</td>");
                }
                $('.container-fluid .tremor3 tr[data-count=' + tremorRow3.arrFftMagNormalizedSmoothed.length + ']').append("<td>" + tremorRow3.colSumRaw.avgNotesMusic + "</td>");
                $('.container-fluid .tremor3 tr[data-count=' + +tremorRow3.arrFftMagNormalizedSmoothed.length + 1 + ']').append("<td>" + tremorRow3.colSumRaw.stDevNotesMusic + "</td>");


                /*for (i = 0, j = 1; i < tremorRow3.lowerAndHigherFreq_2.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>freq=" + tremorRow3.lowerAndHigherFreq_2[i].freq + "</br>power="+ tremorRow3.lowerAndHigherFreq_2[i].mag + "</td>");
                }*/
                /* for (i = 0, j = 1; i < tremorRow3.lowerAndHigherFreq_2.length; i++, j++) {
                     $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.lowerAndHigherFreq_2[i].mag + "</td>");
                 }*/

                for (i = 0, j = 1; i < tremorRow3.colSumSmoothed.arr.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.colSumSmoothed.arr[i] + "</td>");
                }
                $('.container-fluid .tremor3 tr[data-count=' + tremorRow3.colSumSmoothed.arr.length + ']').append("<td>" + tremorRow3.colSumSmoothed.avgNotesMusic + "</td>");
                $('.container-fluid .tremor3 tr[data-count=' + +tremorRow3.colSumSmoothed.arr.length + 1 + ']').append("<td>" + tremorRow3.colSumSmoothed.stDevNotesMusic + "</td>");


                for (i = 0, j = 1; i < tremorRow3.colSumSmthNormed.arr.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.colSumSmthNormed.arr[i] + "</td>");
                }

                $('.container-fluid .tremor3 tr[data-count=' + tremorRow3.colSumSmthNormed.arr.length + ']').append("<td>" + tremorRow3.colSumSmthNormed.avgNotesMusic + "</td>");
                $('.container-fluid .tremor3 tr[data-count=' + +tremorRow3.colSumSmthNormed.arr.length + 1 + ']').append("<td>" + tremorRow3.colSumSmthNormed.stDevNotesMusic + "</td>");


                for (i = 0, j = 1; i < tremorRow3.arrSumSmthNorm_1.arrResult.length; i++, j++) {
                    $('.container-fluid .tremor3 tr[data-count=' + i + ']').append("<td>" + tremorRow3.arrSumSmthNorm_1.arrResult[i] + "</td>");
                }


                $('.container-fluid .tremor3 tr[data-count=' + tremorRow3.arrSumSmthNorm_1.arrResult.length + ']').append("<td>" + tremorRow3.arrSumSmthNorm_1.avgNotesMusic + "</td>");
                $('.container-fluid .tremor3 tr[data-count=' + +tremorRow3.arrSumSmthNorm_1.arrResult.length + 1 + ']').append("<td>" + tremorRow3.arrSumSmthNorm_1.stDevNotesMusic + "</td>");


                $('.pretremor3 tr.tremData').append('<td>' + tremorRow3.maxConstAbs + '</td><td>' + tremorRow3.maxConstAbs_NO + '</td><td>' + tremorRow3.maxFreqMag + '</td><td>' + tremorRow3.maxFreqMag_NO + '</td><td>' + tremorRow3.averageConstAbs + '</td><td>' + tremorRow3.averageConstAbs_NO + '</td><td>' + tremorRow3.averageFreqMag + '</td><td>' + tremorRow3.averageFreqMag_NO + '</td><td>' + tremorRow3.averageD23_635 + '</td><td>' + tremorRow3.stanDotClone + '</td>');

                $('.pretremor3 tr.tremDataNext').append("<td>" + tremorRow3.divisionaverageValuesFftMag_23_404_405_635 + "</td><td>" + tremorRow3.divisionaverageValuesFftMag_23_329_329_635 + "</td><td>q3=" + tremorRow3.quartileFftMag_23_635.q3 + "</br>max=" + tremorRow3.quartileFftMag_23_635.max + "</td><td>" + tremorRow3.divisionQuartOnMaxFftMag + "</td><td>" + tremorRow3.division_q3_average + "</td>");

                $('.pretremor3 tr.tremDataNext').append('<td>' + tremorRow3.maxFreqMagDiff + '</td><td>' + tremorRow3.maxFreqMagDiff_NO + '</td>');

                $('.pretremor3 tr.tremDataNextNew').append('<td>' + tremorRow3.objSolfg.sideralDay + '</td><td>' + tremorRow3.objSolfg.liberating + '</td><td>' + tremorRow3.objSolfg.breakemo + '</td><td>' + tremorRow3.objSolfg.reprLove + '</td><td>' + tremorRow3.objSolfg.connect + '</td><td>' + tremorRow3.objSolfg.intuition + '</td><td>' + tremorRow3.objSolfg.spirorder + '</td><td>' + tremorRow3.objSolfg.mixSolft + '</td>');

                $('.pretremor3 tr.tremDataNextNewNext').append('<td>' + tremorRow3.powerOctaves + '</td><td>' + tremorRow3.avgPowerOctaves + '</td><td>' + tremorRow3.maxFftMagNormalized + '</td>');

                $('.pretremor3 tr.tremDataNextNewNext').append('<td>' + tremorRow3.totalMusicRaw + '</td><td>' + tremorRow3.totalMusicRawStDev + '</td><td>' + tremorRow3.totalMusicSmth + '</td><td>' + tremorRow3.totalMusicSmthStDev + '</td><td>' + tremorRow3.totalMusicRaw_Smth + '</td>');

                $('.pretremor3 tr.tremNextRow').append('<td>' + tremorRow3.sumSmoothedStDev + '</td><td>' + tremorRow3.sumNormalizedAvg + '</td><td>' + tremorRow3.sumSmthNormedAvg + '</td>');
                // $('.pretremor3').append('<tr><td>' + tremorRow3.sumSmoothedStDev + '</td><td>' + tremorRow3.sumNormalizedAvg + '</td><td>' + tremorRow3.sumSmthNormedAvg + '</td></tr>');

                $('.pretremor3 tr.tremNextRow').append('<td>' + tremorRow3.colSumSmthNorm_1Avg + '</td>');
                // $('.pretremor3').append('<td>' + tremorRow3.colSumSmthNorm_1Avg + '</td>');
                $('.tab6').attr('data-load', 'loaded');
                $('.table').hide();
                $('.tremor3').show();
                $('.pretremor3').show();
            });
        } else {
            $('.table').hide();
            $('.tremor3').show();
            $('.pretremor3').show();
        }
    });

    $('.tab7').on('click', function () {
        $(this).attr('disable', 'disabled');
        var load = $(this).attr('data-load');
        if (load != 'loaded') {
            $.post("http://switchmymind.chdev.com.ua/curl.php", function (data) {
                //var table = JSON.stringify(data);
                // var user = JSON.parse(table);
                var user = JSON.parse(data);
                var tremorNegen = user.sheet_tremorNegentropicAlgorithm;
                var i, j, k;


                for (k = 0; k < 6; k++) {

                    $('.container-fluid .negentropic' + k).append("<caption>Table_" + tremorNegen[k].tableName + "</caption>");
                    for (j = 0; j < tremorNegen[k].cells.length; j++) {
                        for (i = 0; i < tremorNegen[k].cells[j].length; i++) {
                            //$('.container-fluid .negentropic').append("<caption>"+tremorNegen[0].tableName+"</caption><th>"+tremorNegen[0].cells[0][0].title+"</th><tr><td>"+tremorNegen[0].cells[0][0].line9.address+"</td><td>"+tremorNegen[0].cells[0][0].line10.address+"</td></tr><tr><td>"+tremorNegen[0].cells[0][0].line9.value+"</td><td>"+tremorNegen[0].cells[0][0].line10.value+"</td></tr>");
                            $('.container-fluid .negentropic' + k).append("<tr><td>" + tremorNegen[k].cells[j][i].title + "</td></tr><tr><td>" + tremorNegen[k].cells[j][i].line9.address + "</td><td>" + tremorNegen[k].cells[j][i].line9.value + "</td></tr><tr><td>" + tremorNegen[k].cells[j][i].line10.address + "</td><td>" + tremorNegen[k].cells[j][i].line10.value + "</td></tr>");
                        }
                    }

                }


                $('.container-fluid .negentropic5').append("<caption>Table_" + tremorNegen[5].tableName + "</caption>");
                for (j = 0; j < tremorNegen[5].cells.length; j++) {
                    for (i = 0; i < tremorNegen[5].cells[j].length; i++) {
                        //$('.container-fluid .negentropic').append("<caption>"+tremorNegen[0].tableName+"</caption><th>"+tremorNegen[0].cells[0][0].title+"</th><tr><td>"+tremorNegen[0].cells[0][0].line9.address+"</td><td>"+tremorNegen[0].cells[0][0].line10.address+"</td></tr><tr><td>"+tremorNegen[0].cells[0][0].line9.value+"</td><td>"+tremorNegen[0].cells[0][0].line10.value+"</td></tr>");
                        $('.container-fluid .negentropic6').append("<tr><td>" + tremorNegen[5].cells[j][i].title + "</td></tr><tr><td>" + tremorNegen[5].cells[j][i].line9.address + "</td><td>" + tremorNegen[5].cells[j][i].line9.value + "</td></tr><tr><td>" + tremorNegen[5].cells[j][i].line10.address + "</td><td>" + tremorNegen[5].cells[j][i].line10.value + "</td></tr>");

                    }
                }


                $('.container-fluid .negentropic6').append("<caption>Table_" + tremorNegen[6].tableName + "</caption>");
                for (j = 0; j < tremorNegen[6].cells.length; j++) {
                    for (i = 0; i < tremorNegen[6].cells[j].length; i++) {
                        //$('.container-fluid .negentropic').append("<caption>"+tremorNegen[0].tableName+"</caption><th>"+tremorNegen[0].cells[0][0].title+"</th><tr><td>"+tremorNegen[0].cells[0][0].line9.address+"</td><td>"+tremorNegen[0].cells[0][0].line10.address+"</td></tr><tr><td>"+tremorNegen[0].cells[0][0].line9.value+"</td><td>"+tremorNegen[0].cells[0][0].line10.value+"</td></tr>");
                        $('.container-fluid .negentropic6').append("<tr><td>" + tremorNegen[6].cells[j][i].title + "</td></tr><tr><td>" + tremorNegen[6].cells[j][i].line9.address + "</td><td>" + tremorNegen[6].cells[j][i].line9.value + "</td></tr><tr><td>" + tremorNegen[6].cells[j][i].line10.address + "</td><td>" + tremorNegen[6].cells[j][i].line10.value + "</td></tr>");

                    }
                }

                $('.tab7').attr('data-load', 'loaded');
                $('.table').hide();
                $('.negentropic0').show();
                $('.negentropic1').show();
                $('.negentropic2').show();
                $('.negentropic3').show();
                $('.negentropic4').show();
                $('.negentropic5').show();
                $('.negentropic6').show();
                //$('.pretremor4').show();
            });
        } else {
            $('.table').hide();
            $('.negentropic0').show();
            $('.negentropic1').show();
            $('.negentropic2').show();
            $('.negentropic3').show();
            $('.negentropic4').show();
            $('.negentropic5').show();
            $('.negentropic6').show();
            //$('.pretremor4').show();
        }

    });

});