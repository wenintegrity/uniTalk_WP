$(document).ready(function() {

    var datatable;
    var infoId;

    $('.tab1[data-toggle="tab"], .tab2[data-toggle="tab"], .tab3[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var tab = $(e.target).data('tab');

        $('.tab-pane').html('').css('display', 'none');
        $('#tab' + tab).html($('.data-snippet').html());

        if(datatable !== undefined) {
            datatable.fixedHeader.disable();
        }

        $.get(apiUrl + '/calculations/' + infoId, function (data) {
            var sheet_data;

            if(tab === 1) {
                sheet_data = data.res.sheet_data_1;
            } else if(tab === 2) {
                sheet_data = data.res.sheet_data_2;
            } else {
                sheet_data = data.res.sheet_data_3;
            }

            $('body #tab' + tab + ' .download-data-btn').attr('href', apiUrl + '/calculations/' + infoId + '/data/' + tab);

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

            $('body #tab' + tab).show();
            $('body #tab' + tab + ' .table2 caption').text('DATA ' + tab);
            datatable = $('body #tab' + tab + ' .table1').DataTable({
                fixedHeader: true,
                "searching": true,
                pageLength: 50
            });
            datatable = $('#tab' + tab + ' .table2').DataTable({
                fixedHeader: true,
                "searching": true,
                pageLength: 50,
                "processing": true,
                data: sheet_data.arrElements,
                "columns": [
                    { "data": "id" },
                    { "data": "time" },
                    { "data": "iPad" },
                    { "data": "outMic0ed" },
                    { "data": "outMicFiltered" },
                    { "data": "outMicNrmalz" },
                    { "data": "outMicM50" }
                ]
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

        $.get(apiUrl + '/calculations/' + infoId, function (data) {

            var sheet_tremor;

            if(tab === 4) {
                sheet_tremor = data.res.sheet_tremorSpectrum_1;
            } else if(tab === 5) {
                sheet_tremor = data.res.sheet_tremorSpectrum_2;
            } else {
                sheet_tremor = data.res.sheet_tremorSpectrum_3;
            }

            /* Table 1 */
            $('body #tab' + tab + ' .table1').append('<tr>' +
                '<th>divisionAverageValuesFftMag_23_329_329_635</th><th>divisionAverageValuesFftMag_23_404_405_635</th><th>divisionQuartOnMaxFftMag</th><th>division_q3_average</th><th>stanDotClone</th>' +
                '</tr>' +
                '<tr>' +
                '<td>'+sheet_tremor.divisionAverageValuesFftMag_23_329_329_635+'</td><td>'+sheet_tremor.divisionAverageValuesFftMag_23_404_405_635+'</td><td>'+sheet_tremor.divisionQuartOnMaxFftMag+'</td><td>'+sheet_tremor.division_q3_average+'</td><td>'+sheet_tremor.stanDotClone+'</td>' +
                '</tr>');

            for(var norm_item in sheet_tremor.norm) {
                $('body #tab' + tab + ' .table1 tr.norm-headers').append('<th>' + norm_item + '</th>');
                $('body #tab' + tab + ' .table1 tr.norm-values').append('<td>' + sheet_tremor.norm[norm_item] + '</td>');
            }
            for(var normScaled_item in sheet_tremor.normScaled) {
                $('body #tab' + tab + ' .table1 tr.normScaled-headers').append('<th>' + normScaled_item + '</th>');
                $('body #tab' + tab + ' .table1 tr.normScaled-values').append('<td>' + sheet_tremor.normScaled[normScaled_item] + '</td>');
            }
            for(var max_item in sheet_tremor.max) {
                $('body #tab' + tab + ' .table1 tr.max-headers').append('<th>' + max_item + '</th>');
                $('body #tab' + tab + ' .table1 tr.max-values').append('<td>' + sheet_tremor.max[max_item] + '</td>');
            }
            for(var average_item in sheet_tremor.average) {
                $('body #tab' + tab + ' .table1 tr.average-headers').append('<th>' + average_item + '</th>');
                $('body #tab' + tab + ' .table1 tr.average-values').append('<td>' + sheet_tremor.average[average_item] + '</td>');
            }

            /* Table 2 */
            for(var totalMusic_item in sheet_tremor.totalMusic) {
                $('body #tab' + tab + ' .table2 thead tr').append('<th>' + totalMusic_item + '</th>');
                $('body #tab' + tab + ' .table2 tbody tr').append('<td>' + sheet_tremor.totalMusic[totalMusic_item] + '</td>');
            }

            /* Table 3 */
            for(var musicalHarmonics_item in sheet_tremor.musicalHarmonics) {
                $('body #tab' + tab + ' .table3 thead tr').append('<th>' + musicalHarmonics_item + '</th>');
                $('body #tab' + tab + ' .table3 tbody tr').append('<td>' + sheet_tremor.musicalHarmonics[musicalHarmonics_item] + '</td>');
            }

            /* Table 4 */
            for(var allFftData_item in sheet_tremor.allFftData) {
                $('body #tab' + tab + ' .table4 thead tr').append('<th>' + allFftData_item + '</th>');
                $('body #tab' + tab + ' .table4 tbody tr').append('<td>' + sheet_tremor.allFftData[allFftData_item] + '</td>');
            }

            /* Table 5 */
            var tremor_table_3_rows_count = sheet_tremor.colSum.raw.arr.length + 2;

            $('body #tab' + tab + ' .table5 thead tr').append('<th>Note</th>');
            for(var colSum_item in sheet_tremor.colSum) {
                $('body #tab' + tab + ' .table5 thead tr').append('<th>' + colSum_item + '</th>');
            }
            for (i = 0, j = 1; i < tremor_table_3_rows_count; i++, j++) {
                $('body #tab' + tab + ' .table5 tbody').append("<tr data-count=" + i + "></tr>");

                for(colSum_item in sheet_tremor.colSum) {
                    if(colSum_item === 'raw') {
                        if(tremor_table_3_rows_count - i === 2){
                            $('body #tab' + tab + ' .table5 tbody tr[data-count=' + i + ']').append('<td>avgNotesMusic</td><td>' + sheet_tremor.colSum[colSum_item].avgNotesMusic + '</td>');
                        } else if(tremor_table_3_rows_count - i === 1) {
                            $('body #tab' + tab + ' .table5 tbody tr[data-count=' + i + ']').append('<td>stDevNotesMusic</td><td>' + sheet_tremor.colSum[colSum_item].stDevNotesMusic + '</td>');
                        } else {
                            $('body #tab' + tab + ' .table5 tbody tr[data-count=' + i + ']').append('<td>' + sheet_tremor.colSum[colSum_item].arr[i].name + '</td><td>' + sheet_tremor.colSum[colSum_item].arr[i].value + '</td>');
                        }
                    } else {
                        if(tremor_table_3_rows_count - i === 2){
                            $('body #tab' + tab + ' .table5 tbody tr[data-count=' + i + ']').append('<td>' + sheet_tremor.colSum[colSum_item].avgNotesMusic + '</td>');
                        } else if(tremor_table_3_rows_count - i === 1) {
                            $('body #tab' + tab + ' .table5 tbody tr[data-count=' + i + ']').append('<td>' + sheet_tremor.colSum[colSum_item].stDevNotesMusic + '</td>');
                        } else {
                            $('body #tab' + tab + ' .table5 tbody tr[data-count=' + i + ']').append('<td>' + sheet_tremor.colSum[colSum_item].arr[i].value + '</td>');
                        }
                    }
                }
            }

            /* Table 6 */
            var i, j;

            for (i = 0, j = 1; i < data.res.headers_sheet_tremorSpectrum.length; i++, j++) {
                $('body #tab' + tab + ' .table6 thead tr').append("<th>" + data.res.headers_sheet_tremorSpectrum[i].nameCol + "</th>");
            }

            /***********/

            $('body #tab' + tab).show();
            $('body #tab' + tab + ' .table6 caption').text('Tremor ' + (tab - 3));

            datatable = $('body #tab' + tab + ' .table6').DataTable({
                fixedHeader: true,
                "searching": true,
                pageLength: 50,
                "processing": true,
                data: sheet_tremor.mainTable,
                "columnDefs": [
                    {
                        "targets": '_all',
                        "data": null,
                        "defaultContent": ""
                    }
                ],
                "columns": [
                    { "data": "id" },
                    { "data": "outMicM50" },
                    { "data": "fftFreq" },
                    { "data": "fftMag" },
                    { "data": "fftComplex[, ]" },
                    { "data": "constants" },
                    { "data": "freqMagScaleNormalizedData" },
                    { "data": "freqMagInDifLess_1" },
                    { "data": "freqMagInDifMore_1" },
                    { "data": "constABSDifHarmoniMore_1" },
                    { "data": "freqMag_NO" },
                    { "data": "constAbsDifHarmoniNormalLess_1" },
                    { "data": "freqMagNormalMore_1" },
                    { "data": "constAbsDifHarmoniNormalMore_1" },
                    { "data": "freqMagNormalLess_1" },
                    { "data": "freqMagInDifLess_12_More_8" },
                    { "data": "freqMagDifDiffLess_1" },
                    { "data": "freqMagDifDiff_NO" },
                    { "data": "freqMagDifDiffNormal" },
                    { "data": "freqMagDifDiffNormal_NO" },
                    { "data": "fftMagNormalized" },
                    { "data": "fftNote" },
                    { "data": "lowerAndHigherFreq_1", render: function(data){
                        var res = null;
                        if(data) {
                            res = 'freq=' + data.freq + '<br>' +
                                'power=' + data.power + '<br>' +
                                'note=' + data.note;
                        }
                        return res;
                    } },
                    { "data": "lowerAndHigherFreq_2", render: function(data){
                        var res = null;
                        if(data) {
                            res = 'freq=' + data.freq + '<br>' +
                                'power=' + data.power + '<br>' +
                                'note=' + data.note;
                        }
                        return res;
                    } },
                    { "data": "fftMagRawSmoothed" },
                    { "data": "fftMagNormalizedSmoothed" },
                    { "data": "lowerAndHigherFreq_3", render: function(data){
                        var res = null;
                        if(data) {
                            res = 'freq=' + data.freq + '<br>' +
                                'power=' + data.power + '<br>' +
                                'note=' + data.note;
                        }
                        return res;
                    } }
                ]
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

        $.get(apiUrl + '/calculations/' + infoId, function (data) {

            var tremorNegen = data.res.sheet_tremorNegentropicAlgorithm;
            var i, j, k, m;

            for (k = 0; k < tremorNegen.length; k++) {

                $('body #tab' + tab + ' .negentropic' + k).append("<caption>Table_" + tremorNegen[k].tableName + "</caption>");

                if(tremorNegen[k].cells !== undefined) {
                    for (j = 0; j < tremorNegen[k].cells.length; j++) {
                        for (i = 0; i < tremorNegen[k].cells[j].length; i++) {
                            $('body #tab' + tab + ' .negentropic' + k).append("<tr><td>" + tremorNegen[k].cells[j][i].title + "</td>" +
                                "<td>" + tremorNegen[k].cells[j][i].line9.value + "</td>" +
                                "<td>" + tremorNegen[k].cells[j][i].line10.value + "</td></tr>");
                        }
                    }
                }
                if(tremorNegen[k].cells_1 !== undefined) {
                    for (j = 0; j < tremorNegen[k].cells_1.length; j++) {
                        for (i = 0; i < tremorNegen[k].cells_1[j].length; i++) {
                            $('body #tab' + tab + ' .negentropic' + k).append("<tr><td>" + tremorNegen[k].cells_1[j][i].title + "</td>" +
                                "<td>" + tremorNegen[k].cells_1[j][i].line9.value + "</td>" +
                                "<td>" + tremorNegen[k].cells_1[j][i].line10.value + "</td></tr>");
                        }
                    }
                }
                if(tremorNegen[k].cells_2 !== undefined) {
                    for (j = 0; j < tremorNegen[k].cells_2.length; j++) {
                        for (i = 0; i < tremorNegen[k].cells_2[j].length; i++) {
                            $('body #tab' + tab + ' .negentropic' + k).append("<tr><td>" + tremorNegen[k].cells_2[j][i].title + "</td>" +
                                "<td>" + tremorNegen[k].cells_2[j][i].line9.value + "</td>" +
                                "<td>" + tremorNegen[k].cells_2[j][i].line10.value + "</td></tr>");
                        }
                    }
                }

                if(tremorNegen[k].result !== undefined) {
                    $('body #tab' + tab + ' .negentropic' + k).append("<tr><td>Result:</td>" +
                        "<td>" + tremorNegen[k].result[0] + "</td>" +
                        "<td>" + tremorNegen[k].result[1]+ "</td></tr>");
                }
                if(tremorNegen[k].result_1 !== undefined) {
                    $('body #tab' + tab + ' .negentropic' + k).append("<tr><td>Result:</td>" +
                        "<td>" + tremorNegen[k].result_1[0] + "</td>" +
                        "<td>" + tremorNegen[k].result_1[1] + "</td></tr>");
                }
                if(tremorNegen[k].result_2 !== undefined) {
                    $('body #tab' + tab + ' .negentropic' + k).append("<tr><td>Result:</td>" +
                        "<td>" + tremorNegen[k].result_2[0] + "</td>" +
                        "<td>" + tremorNegen[k].result_2[1] + "</td></tr>");
                }

            }

            for(var res_item in data.res.result){
                $('body #tab' + tab + ' .negentropic-result tbody tr').append('<td>'+ data.res.result[res_item] +'</td>');
            }

            $('body #tab' + tab).show();
            datatable = $('body #tab' + tab + ' .table.negentropic').DataTable({
                fixedHeader: true,
                "searching": false,
                pageLength: 10
            });
        });

    });

    $.get(apiUrl + '/users/all', function (data) {

        for(var item in data) {
            $('.username_dropdown').append('<li><a href="#" data-id="'+ data[item]._id +'">'+ data[item].email +'</a></li>');
        }

        $('body .username_dropdown a').on('click', function(e){
            e.preventDefault();

            var user_id = $(this).data('id');

            $('#username-val').text($(this).text());
            $('#session-val').text('');
            $('#sample-val').text('');
            $('.session_dropdown').html('');
            $('.sample_dropdown').html('');
            $('.tables-hav-holder').hide();
            $('.tab-content .tab-pane').html('');
            $('.show-info-btn').addClass('hidden');
            $('#showInfo .modal-body').html('');

            $.get(apiUrl + '/users/' + user_id + '/sessions', function (data) {
                for(var item in data) {
                    $('.session_dropdown').append('<li><a href="#" data-id="'+ data[item]._id +'">'+ data[item]._id+'</a></li>');
                }

                $('body .session_dropdown a').on('click', function(e){
                    e.preventDefault();

                    var session_id = $(this).data('id');

                    $('#session-val').text($(this).text());
                    $('#sample-val').text('');
                    $('.sample_dropdown').html('');
                    $('.tables-hav-holder').hide();
                    $('.tab-content .tab-pane').html('');
                    $('.show-info-btn').addClass('hidden');
                    $('#showInfo .modal-body').html('');

                    $.get(apiUrl + '/sessions/' + session_id, function (data) {
                        for(var item in data) {
                            $('body .sample_dropdown').append('<li><a href="#" data-time="'+ data[item].req.time +'" data-location="'+ data[item].req.location.latitude + ',' + data[item].req.location.longitude + '" data-id="'+ data[item]._id +'">'+ data[item].req.location.latitude + ',' + data[item].req.location.longitude + ', ' + data[item].req.time +'</a></li>');
                        }

                        $('body .sample_dropdown a').on('click', function(e){
                            e.preventDefault();

                            $('#sample-val').text($(this).text());

                            $('.tables-hav-holder').show().find('li a').removeAttr('aria-expanded').parent().removeClass('active');
                            $('.tab-content .tab-pane').html('');
                            $('.show-info-btn').removeClass('hidden');

                            $('#showInfo .modal-body').html('');
                            $('#showInfo .modal-body')
                                .append('<p>Location: ' + $(this).data('location') + '</p>')
                                .append('<p>Time: ' + $(this).data('time') + '</p>');

                            infoId = $(this).data('id');
                        });
                    });
                });
            });
        });
    });



} );