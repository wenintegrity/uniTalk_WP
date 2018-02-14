$(document).ready(function() {

    var datatable;

    $('.tab1[data-toggle="tab"], .tab2[data-toggle="tab"], .tab3[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var tab = $(e.target).data('tab');

        $('.tab-pane').html('').css('display', 'none');
        $('#tab' + tab).html($('.data-snippet').html());

        if(datatable !== undefined) {
            datatable.fixedHeader.disable();
        }

        $.post(curlUrl, function (data) {

            var user = JSON.parse(data);
            var sheet_data;

            if(tab === 1) {
                sheet_data = user.sheet_data_1;
            } else if(tab === 2) {
                sheet_data = user.sheet_data_2;
            } else {
                sheet_data = user.sheet_data_3;
            }

            function makeTextFile(text) {
                var data = new Blob([text], {type: 'text/plain'});
                return window.URL.createObjectURL(data);
            }

            $('body #tab' + tab + ' .download-data-btn').attr('href', makeTextFile(JSON.stringify({
                "data_1" : user.sheet_data_1,
                "data_2" : user.sheet_data_2,
                "data_3" : user.sheet_data_3
            })));

            var i, j;

            for (i = 0, j = 1; i < sheet_data.arrElements.length; i++, j++) {
                $('body #tab' + tab + ' .table2').append("<tr><td>" + j + "</td><td>" + sheet_data.arrElements[i].time + "</td><td>" + sheet_data.arrElements[i].iPad + "</td><td>" + sheet_data.arrElements[i].outMic0ed + "</td><td>" + sheet_data.arrElements[i].outMicFiltered + "</td><td>" + sheet_data.arrElements[i].outMicNrmalz + "</td><td>" + sheet_data.arrElements[i].outMicM50 + "</td></tr>");
            }

            $('body #tab' + tab + ' .table1 .count.forIPad').append(sheet_data.quartileForIPad.num);
            $('body #tab' + tab + ' .table1 .median.forIPad').append(sheet_data.quartileForIPad.median);
            $('body #tab' + tab + ' .table1 .threequartile.forIPad').append(sheet_data.quartileForIPad.q3);
            $('body #tab' + tab + ' .table1 .onequartile.forIPad').append(sheet_data.quartileForIPad.q1);
            $('body #tab' + tab + ' .table1 .average.forIPad').append(sheet_data.quartileForIPad.avg);
            $('body #tab' + tab + ' .table1 .maximum.forIPad').append(sheet_data.quartileForIPad.max);
            $('body #tab' + tab + ' .table1 .minimum.forIPad').append(sheet_data.quartileForIPad.min);

            $('body #tab' + tab + ' .table1 .count.forMic0ed').append(sheet_data.quartileForOutMic0ed.num);
            $('body #tab' + tab + ' .table1 .median.forMic0ed').append(sheet_data.quartileForOutMic0ed.median);
            $('body #tab' + tab + ' .table1 .threequartile.forMic0ed').append(sheet_data.quartileForOutMic0ed.q3);
            $('body #tab' + tab + ' .table1 .onequartile.forMic0ed').append(sheet_data.quartileForOutMic0ed.q1);
            $('body #tab' + tab + ' .table1 .average.forMic0ed').append(sheet_data.quartileForOutMic0ed.avg);
            $('body #tab' + tab + ' .table1 .maximum.forMic0ed').append(sheet_data.quartileForOutMic0ed.max);
            $('body #tab' + tab + ' .table1 .minimum.forMic0ed').append(sheet_data.quartileForOutMic0ed.min);

            $('body #tab' + tab + ' .table1 .count.forMicFilt').append(sheet_data.quartileForOutMicFilt.num);
            $('body #tab' + tab + ' .table1 .median.forMicFilt').append(sheet_data.quartileForOutMicFilt.median);
            $('body #tab' + tab + ' .table1 .threequartile.forMicFilt').append(sheet_data.quartileForOutMicFilt.q3);
            $('body #tab' + tab + ' .table1 .onequartile.forMicFilt').append(sheet_data.quartileForOutMicFilt.q1);
            $('body #tab' + tab + ' .table1 .average.forMicFilt').append(sheet_data.quartileForOutMicFilt.avg);
            $('body #tab' + tab + ' .table1 .maximum.forMicFilt').append(sheet_data.quartileForOutMicFilt.max);
            $('body #tab' + tab + ' .table1 .minimum.forMicFilt').append(sheet_data.quartileForOutMicFilt.min);

            $('body #tab' + tab + ' .table1 .count.forMicNrmalz').append(sheet_data.quartileForOutMicNrmalz.num);
            $('body #tab' + tab + ' .table1 .median.forMicNrmalz').append(sheet_data.quartileForOutMicNrmalz.median);
            $('body #tab' + tab + ' .table1 .threequartile.forMicNrmalz').append(sheet_data.quartileForOutMicNrmalz.q3);
            $('body #tab' + tab + ' .table1 .onequartile.forMicNrmalz').append(sheet_data.quartileForOutMicNrmalz.q1);
            $('body #tab' + tab + ' .table1 .average.forMicNrmalz').append(sheet_data.quartileForOutMicNrmalz.avg);
            $('body #tab' + tab + ' .table1 .maximum.forMicNrmalz').append(sheet_data.quartileForOutMicNrmalz.max);
            $('body #tab' + tab + ' .table1 .minimum.forMicNrmalz').append(sheet_data.quartileForOutMicNrmalz.min);

            $('body #tab' + tab + '').show();
            $('body #tab' + tab + ' .table2 caption').text('DATA ' + tab);
            datatable = $('body #tab' + tab + ' .table1, #tab' + tab + ' .table2').DataTable({
                fixedHeader: true,
                "searching": true,
                pageLength: 50
            });

        });
    });

    $('.tab4[data-toggle="tab"], .tab5[data-toggle="tab"], .tab6[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var tab = $(e.target).data('tab');

        $('.tab-pane').html('').css('display', 'none');
        $('#tab' + tab).html($('.tremor-snippet').html());

        if(datatable !== undefined) {
            datatable.fixedHeader.disable();
        }

        $.post(curlUrl, function (data) {

            var user = JSON.parse(data);
            var sheet_tremor;

            if(tab === 4) {
                sheet_tremor = user.sheet_tremorSpectrum_1;
            } else if(tab === 5) {
                sheet_tremor = user.sheet_tremorSpectrum_2;
            } else {
                sheet_tremor = user.sheet_tremorSpectrum_3;
            }

            var i, j;

            for (i = 0, j = 1; i < user.headers_sheet_tremorSpectrum.length; i++, j++) {
                $('body #tab' + tab + ' .table2 thead tr').append("<th>" + user.headers_sheet_tremorSpectrum[i].nameCol + "</th>");
            }

            var tremor_rows_count = sheet_tremor.arrFftFreq.length;

            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody').append("<tr data-count=" + i + "><td>" + j + "</td><td>" + sheet_tremor.arrFftFreq[i] + "</td></tr>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFftMag[i] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFftComplex[i][0] + "</br>" + sheet_tremor.arrFftComplex[i][1] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrConstABS[i] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMag[i] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrConstABS_NO[i] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMag_NO[i] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrConstAbsNormal[i] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrConstAbsNormal_NO[i] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMagNormal[i] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMagNormal_NO[i] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMagDiff[i] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMagDiff_NO[i] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMagDiffNormal[i] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMagDiffNormal_NO[i] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFftMagNormalized[i] + "</td>");
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                if(sheet_tremor.lowerAndHigherFreq_1[i] !== undefined) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>freq=" + sheet_tremor.lowerAndHigherFreq_1[i].freq + "</br>power=" + sheet_tremor.lowerAndHigherFreq_1[i].power + "</td>");
                } else {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>_</td>");
                }
            }
            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                if(sheet_tremor.colSumRaw.arr[i] !== undefined) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.colSumRaw.arr[i] + "</td>");
                } else if(sheet_tremor.colSumRaw.arr.length === i){
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>avgNotesMusic=" + sheet_tremor.colSumRaw.avgNotesMusic + "</td>");
                } else if(sheet_tremor.colSumRaw.arr.length + 1 === i){
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>stDevNotesMusic=" + sheet_tremor.colSumRaw.stDevNotesMusic + "</td>");
                } else {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>_</td>");
                }
            }

            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                if(sheet_tremor.colSumNormalized.arr[i] !== undefined) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.colSumNormalized.arr[i] + "</td>");
                } else if(sheet_tremor.colSumNormalized.arr.length === i){
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>avgNotesMusic=" + sheet_tremor.colSumNormalized.avgNotesMusic + "</td>");
                } else if(sheet_tremor.colSumNormalized.arr.length + 1 === i){
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>stDevNotesMusic=" + sheet_tremor.colSumNormalized.stDevNotesMusic + "</td>");
                } else {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>_</td>");
                }
            }

            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td class='arrFftMagRawSmoothed'>" + sheet_tremor.arrFftMagRawSmoothed[i] + "</td>");
            }

            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td class='arrFftMagNormalizedSmoothed'>" + sheet_tremor.arrFftMagNormalizedSmoothed[i] + "</td>");
            }

            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                if(sheet_tremor.lowerAndHigherFreq_2[i] !== undefined) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>freq=" + sheet_tremor.lowerAndHigherFreq_2[i].freq + "</br>power=" + sheet_tremor.lowerAndHigherFreq_2[i].power + "</td>");
                } else {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>_</td>");
                }
            }

            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                if(sheet_tremor.colSumSmoothed.arr[i] !== undefined) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.colSumSmoothed.arr[i] + "</td>");
                } else if(sheet_tremor.colSumSmoothed.arr.length === i){
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>avgNotesMusic=" + sheet_tremor.colSumSmoothed.avgNotesMusic + "</td>");
                } else if(sheet_tremor.colSumSmoothed.arr.length + 1 === i){
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>stDevNotesMusic=" + sheet_tremor.colSumSmoothed.stDevNotesMusic + "</td>");
                } else {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>_</td>");
                }
            }

            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                if(sheet_tremor.colSumSmthNormed.arr[i] !== undefined) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.colSumSmthNormed.arr[i] + "</td>");
                } else if(sheet_tremor.colSumSmthNormed.arr.length === i){
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>avgNotesMusic=" + sheet_tremor.colSumSmthNormed.avgNotesMusic + "</td>");
                } else if(sheet_tremor.colSumSmthNormed.arr.length + 1 === i){
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>stDevNotesMusic=" + sheet_tremor.colSumSmthNormed.stDevNotesMusic + "</td>");
                } else {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>_</td>");
                }
            }

            for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                if(sheet_tremor.arrSumSmthNorm_1.arrResult[i] !== undefined) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrSumSmthNorm_1.arrResult[i] + "</td>");
                } else if(sheet_tremor.arrSumSmthNorm_1.arrResult.length === i){
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>avgNotesMusic=" + sheet_tremor.arrSumSmthNorm_1.avgNotesMusic + "</td>");
                } else if(sheet_tremor.arrSumSmthNorm_1.arrResult.length + 1 === i){
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>stDevNotesMusic=" + sheet_tremor.arrSumSmthNorm_1.stDevNotesMusic + "</td>");
                } else {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>_</td>");
                }
            }

            $('body #tab' + tab + ' .table1 tr.tremData').append('<td>' + sheet_tremor.maxConstAbs + '</td><td>' + sheet_tremor.maxConstAbs_NO + '</td><td>' + sheet_tremor.maxFreqMag + '</td><td>' + sheet_tremor.maxFreqMag_NO + '</td><td>' + sheet_tremor.averageConstAbs + '</td><td>' + sheet_tremor.averageConstAbs_NO + '</td><td>' + sheet_tremor.averageFreqMag + '</td><td>' + sheet_tremor.averageFreqMag_NO + '</td><td>' + sheet_tremor.averageD23_635 + '</td><td>' + sheet_tremor.stanDotClone + '</td>');

            $('body #tab' + tab + ' .table1 tr.tremDataNext').append("<td>" + sheet_tremor.divisionAverageValuesFftMag_23_404_405_635 + "</td><td>" + sheet_tremor.divisionAverageValuesFftMag_23_329_329_635 + "</td><td>q3=" + sheet_tremor.quartileFftMag_23_635.q3 + "</br>max=" + sheet_tremor.quartileFftMag_23_635.max + "</td><td>" + sheet_tremor.divisionQuartOnMaxFftMag + "</td><td>" + sheet_tremor.division_q3_average + "</td>");

            $('body #tab' + tab + ' .table1 tr.tremDataNext').append('<td>' + sheet_tremor.maxFreqMagDiff + '</td><td>' + sheet_tremor.maxFreqMagDiff_NO + '</td>');

            $('body #tab' + tab + ' .table1 tr.tremDataNextNew').append('<td>' + sheet_tremor.objSolfg.sideralDay + '</td><td>' + sheet_tremor.objSolfg.liberating + '</td><td>' + sheet_tremor.objSolfg.breakemo + '</td><td>' + sheet_tremor.objSolfg.reprLove + '</td><td>' + sheet_tremor.objSolfg.connect + '</td><td>' + sheet_tremor.objSolfg.intuition + '</td><td>' + sheet_tremor.objSolfg.spirorder + '</td><td>' + sheet_tremor.objSolfg.mixSolft + '</td>');

            $('body #tab' + tab + ' .table1 tr.tremDataNextNewNext').append('<td>' + sheet_tremor.powerOctaves + '</td><td>' + sheet_tremor.avgPowerOctaves + '</td><td>' + sheet_tremor.maxFftMagNormalized + '</td>');

            $('body #tab' + tab + ' .table1 tr.tremDataNextNewNext').append('<td>' + sheet_tremor.totalMusicRaw + '</td><td>' + sheet_tremor.totalMusicRawStDev + '</td><td>' + sheet_tremor.totalMusicSmth + '</td><td>' + sheet_tremor.totalMusicSmthStDev + '</td><td>' + sheet_tremor.totalMusicRaw_Smth + '</td>');

            // $('body #tab' + tab + ' .table1 tr.tremNextRow').append('<td>' + sheet_tremor.sumSmoothedStDev + '</td><td>' + sheet_tremor.sumNormalizedAvg + '</td><td>' + sheet_tremor.sumSmthNormedAvg + '</td>');
            //
            // $('body #tab' + tab + ' .table1 tr.tremNextRow').append('<td>' + sheet_tremor.colSumSmthNorm_1Avg + '</td>');

            $('body #tab' + tab + '').show();
            $('body #tab' + tab + ' .table2 caption').text('Tremor ' + (tab - 3));
            datatable = $('body #tab' + tab + ' .table2').DataTable({
                fixedHeader: true,
                "searching": false,
                "scrollX": true,
                pageLength: 50
            });
        });
    });

    $('.tab7[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var tab = $(e.target).data('tab');

        $('.tab-pane').html('').css('display', 'none');
        $('#tab' + tab).html($('.negentropic-snippet').html());

        if(datatable !== undefined) {
            datatable.fixedHeader.disable();
        }

        $.post(curlUrl, function (data) {

            var user = JSON.parse(data);
            var tremorNegen = user.sheet_tremorNegentropicAlgorithm;
            var i, j, k, m;

            for (k = 0; k < tremorNegen.length; k++) {

                $('body #tab' + tab + ' .negentropic' + k).append("<caption>Table_" + tremorNegen[k].tableName + "</caption>");
                for (j = 0; j < tremorNegen[k].cells.length; j++) {
                    for (i = 0; i < tremorNegen[k].cells[j].length; i++) {
                        $('body #tab' + tab + ' .negentropic' + k).append("<tr><td>" + tremorNegen[k].cells[j][i].title + "</td>" +
                            "<td>address=" + tremorNegen[k].cells[j][i].line9.address + "<br>value=" + tremorNegen[k].cells[j][i].line9.value + "</td>" +
                            "<td>address=" + tremorNegen[k].cells[j][i].line10.address + "<br>value=" + tremorNegen[k].cells[j][i].line10.value + "</td></tr>");
                    }
                }

                if(tremorNegen[k].result !== undefined) {
                    for (m = 0; m < tremorNegen[k].result.length; m++) {
                        $('body #tab' + tab + ' .negentropic' + k).append("<tr><td>Result:</td>" +
                            "<td>address=" + tremorNegen[k].result[m].address + "</td>" +
                            "<td>value=" + tremorNegen[k].result[m].value + "</td></tr>");
                    }
                }

            }

            $('body #tab' + tab + '').show();
            datatable = $('body #tab' + tab + ' .table').DataTable({
                fixedHeader: true,
                "searching": false,
                pageLength: 10
            });
        });

    });



} );